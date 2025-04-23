const NASA_API = process.env.NEXT_PUBLIC_NASA_API

type Props = {}

export const GetData = async ({}: Props) => {

    try {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      const thirtyDaysAgo = new Date(yesterday);
      thirtyDaysAgo.setDate(yesterday.getDate() - 30);

      const formatDate = (date: Date) => date.toISOString().split('T')[0];

      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API}&start_date=${formatDate(thirtyDaysAgo)}&end_date=${formatDate(yesterday)}`);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching picture of the day:', error);
      throw error;
    }
}