import { NextApiRequest, NextApiResponse } from "next";

const NASA_API = process.env.NEXT_PUBLIC_NASA_API;

// In-memory cache
let cache: { data: any; timestamp: number } | null = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const days = 29;
  const now = Date.now();

  // Serve from cache if valid
  if (cache && now - cache.timestamp < CACHE_TTL) {
    console.log('Data served from CACHE >> ', cache)
    return res.status(200).json(cache.data);
  }

  try {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const pastDate = new Date(yesterday);
    pastDate.setDate(yesterday.getDate() - Number(days));

    const formatDate = (date: Date) => date.toISOString().split("T")[0];

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}&start_date=${formatDate(pastDate)}&end_date=${formatDate(yesterday)}`
    );

    if (!response.ok) {
      throw new Error(`NASA API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`fetched ${data.length} items from API >>`);
    // Update cache
    cache = { data, timestamp: now };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}