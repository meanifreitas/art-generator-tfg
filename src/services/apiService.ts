import { getApiToken } from '../config/apiConfig';

export const fetchData = async (endpoint: string, options?: RequestInit) => {
  const token = getApiToken();

  const response = await fetch(endpoint, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Error acessing ${endpoint}`);
  }

  return response;
};