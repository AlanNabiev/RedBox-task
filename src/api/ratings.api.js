import httpClient from "./httpClient.js";

const getRatings = () => {
  return httpClient.get("/");
};

export { getRatings };
