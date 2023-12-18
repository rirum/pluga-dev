import axios from 'axios';

export const fetchToolsData = async () => {
  try {
    const response = await axios.get('https://pluga.co/ferramentas_search.json');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
