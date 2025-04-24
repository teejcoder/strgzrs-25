const NASA_API = process.env.NEXT_PUBLIC_NASA_API

type Props = {
  days?: number;  // Allow customizing the number of days to fetch
}

export const GetData = async ({ days = 30 }: Props) => {
    try {
      // Get date range with a smaller default window (15 days instead of 30)
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 2);

      const pastDate = new Date(yesterday);
      pastDate.setDate(yesterday.getDate() - days);

      const formatDate = (date: Date) => date.toISOString().split('T')[0];

      // Add cache control headers
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}&start_date=${formatDate(pastDate)}&end_date=${formatDate(yesterday)}`,
        {
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );
      
      if (!response.ok) {
        throw new Error(`NASA API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Process data to ensure it's well-formed and add placeholders if needed
      const processedData = Array.isArray(data) ? data.map(item => ({
        ...item,
        explanation: item.explanation ? 
          // Truncate extremely long explanations to reduce memory footprint
          item.explanation.length > 1000 ? `${item.explanation.substring(0, 1000)}...` : item.explanation 
          : "No explanation available"
      })) : [];
      
      console.log(`Fetched ${processedData.length} astronomy items`);
      return processedData;
    } catch (error) {
      console.error('Error fetching astronomy pictures:', error);
      return []; // Return empty array instead of throwing to prevent app crashes
    }
}