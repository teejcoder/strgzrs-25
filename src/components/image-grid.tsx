"use client";
import React, { useState, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { GetData } from "@/api/get-data";
import { IconLoader } from "@tabler/icons-react";

interface DataItem {
  media_type: string;
  url: string;
  title: string;
  date: string;
  copyright?: string;
}

export function ImageGrid() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await GetData();
        if (Array.isArray(result)) {
          setData(result);
        } else if (result.error) {
          setError(result.error);
        }
      } catch {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const cards = data.map((item, index) => ({
    id: index,
    content: (
      <div>
        {item.media_type == "video" ? (
          <div>
            <iframe
              src={item.url}
              title={item.title}
              style={{ width: '100%', height: '400px' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="font-bold md:text-4xl text-xl text-white">{item.title}</p>
            <span className="text-sm text-neutral-300">{item.date}</span>
            <p className="text-sm">{item.copyright ? <a href={item.url} className="underline" target="_blank">Copyright: {item.copyright}</a> : ""}</p>
            <p className="text-sm">{item.url ? <a href={item.url} className="underline" target="_blank">Source</a> : ""}</p>
          </div>
        ) : (
          <div>
            <p className="font-bold md:text-4xl text-xl text-white">{item.title}</p>
            <span className="text-sm text-neutral-300">{item.date}</span>
            <p>{item.copyright ? <a href={item.url} className="underline text-sm" target="_blank">Copyright: {item.copyright}</a> : ""}</p>
            <p>{item.url ? <a href={item.url} className="underline text-sm" target="_blank">Source</a> : ""}</p>
          </div>
        )}
      </div>
    ),
    className: index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "",
    thumbnail: item.media_type == 'image' ? item.url : "/thumbnail.png",
  }));

  return (
    <div className="w-full pb-16">
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-white">Loading astronomy pictures</p>
          <IconLoader className="animate-spin" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-red-500">{error}</p>
        </div>
      ) : data.length > 0 ? (
        <LayoutGrid cards={cards} />
      ) : (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-white">No astronomy pictures available.</p>
        </div>
      )}
    </div>
  );
}
