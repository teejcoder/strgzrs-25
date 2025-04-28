
export const GetData = async () => {
  try {
    const response = await fetch('/api/nasa-data');

    if (!response.ok){
      console.log(`ERROR IN NASA API responded with status: ${response.status}`);
    }

    const data = await response.json();

    const processedData = Array.isArray(data)
      ? data.map((item) => ({
          ...item,
          explanation: item.explanation
            ? item.explanation.length > 1000
              ? `${item.explanation.substring(0, 1000)}...`
              : item.explanation
            : "No explanation available",
        }))
      : [];
    
    return processedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch(err){
    console.error("Error fetching data from NASA API:", err);
    return { error: "Failed to fetch data" };
  }
}