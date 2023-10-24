import { useQuery } from "@tanstack/react-query";
import { getResponseData } from "../api";

export const useGetResponseData = () => {
  return useQuery({
    queryKey: ["responseData"],
    queryFn: () => getResponseData(),
    retry: false,
  });
};
