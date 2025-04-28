"use client";
import React, { useState, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { GetData } from "@/api/get-data";

export function ImageGrid() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
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
      } catch (err) {
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
        <p className="font-bold md:text-4xl text-xl text-white">{item.title}</p>
        <span className="text-neutral-300">{item.date}</span>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {item.explanation?.length > 150
            ? `${item.explanation.substring(0, 150)}...`
            : item.explanation}
        </p>
      </div>
    ),
    className: index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "",
    thumbnail: item.url && item.url.trim() !== "" ? item.url : "/placeholder.jpg",
    mediaType: item.media_type || "image",
  }));

  return (
    <div className="w-full pb-16">
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-white">Loading astronomy pictures...</p>
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
