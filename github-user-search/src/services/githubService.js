import axios from 'axios';

const SEARCH_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUsers = async (query) => {
  const response = await axios.get(`${SEARCH_URL}?q=${encodeURIComponent(query)}`);
  return response.data;
};
