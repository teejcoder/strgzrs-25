"use client";
import React, { useState, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { GetData } from "@/api/get-data";
import { StarsBackground } from "./ui/stars-background";

export function ImageGrid() {
  const [data, setData] = useState<any[]>([]);
  const [displayedData, setDisplayedData] = useState<any[]>([]);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 9; // Show fewer items at once

  // fetch data from api/get-data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await GetData({});
        setData(result);
        // Initially display only the first batch of items
        setDisplayedData(result.slice(0, itemsPerPage));
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Load more data when page changes
  useEffect(() => {
    const end = page * itemsPerPage;
    setDisplayedData(data.slice(0, end));
  }, [page, data]);

  // Function to load more items
  const loadMore = () => {
    if (page * itemsPerPage < data.length) {
      setPage(page + 1);
    }
  };

  const cards = displayedData.map((item, index) => ({
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
    className: index % 3 === 0 ? "md:col-span-2" : "",
    thumbnail: item.url && item.url.trim() !== "" ? item.url : "/placeholder.jpg",
    mediaType: item.media_type || "image",
  }));

  return (
    <div className="w-full pb-16">
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-white">Loading astronomy pictures...</p>
        </div>
      ) : displayedData.length > 0 ? (
        <>
          <LayoutGrid cards={cards} />
          {page * itemsPerPage < data.length && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={loadMore}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-white">No astronomy pictures available.</p>
        </div>
      )}
    </div>
  );
}
