import axios from "axios";

export const getResponseData = async () => {
  const response = await axios.get("http://localhost:3000/image");
  return response;
};
