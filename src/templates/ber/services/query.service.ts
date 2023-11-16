import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getReserveList } from "./api.service";

export const useReserveListQuery = (date: string) => {
  const { data, ...queryRest } = useQuery([KEY.RESERVE], async () =>
    getReserveList(date),
  );
  return { reserveList: data, ...queryRest };
};
