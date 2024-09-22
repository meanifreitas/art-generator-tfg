export const getApiToken = (): string => {
  const token = import.meta.env.VITE_API_TOKEN;
  
  if (!token) {
    throw new Error('API token is not defined');
  }
  return token;
};
