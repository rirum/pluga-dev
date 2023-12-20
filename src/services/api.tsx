import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchToolsData = async () => {
  try {
    if (!apiUrl) {
      throw new Error('API_URL não está definido.');
    }

    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
