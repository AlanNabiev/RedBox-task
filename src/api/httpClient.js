import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://testwork.rdbx24.ru/api",
});

export default httpClient;
