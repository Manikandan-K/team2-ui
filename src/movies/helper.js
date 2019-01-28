export const baseUrl = () => {
  return process.env.REACT_APP_API_URL || "http://localhost:9090";
};