import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

/**
 * Constructs a GitHub API query string based on username, location, and minRepos.
 * Example query: https://api.github.com/search/users?q=user:octocat+location:Nairobi+repos:>=10
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `user:${username}`;
  if (location) query += `${query ? '+' : ''}location:${location}`;
  if (minRepos) query += `${query ? '+' : ''}repos:>=${minRepos}`;

  const url = `${BASE_URL}${encodeURIComponent(query)}`;

  const response = await axios.get(url);
  return response.data;
};
