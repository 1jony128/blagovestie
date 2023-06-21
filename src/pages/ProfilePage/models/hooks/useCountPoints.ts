import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { alert } from "@/shared/lib/alerts";
import { PointServices } from "@/entities/Point/models/services/PointServices";
import { useUserStore } from "@/entities/User/models/store/useUserStore";

export interface Data {
  id: number;
  geo_lat: string;
  geo_lon: string;
  date: string;
  count: string;
  address: string;
  user_name: string;
  group_name: string;
  comment: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

const useCountPoints = () => {
  const user = useUserStore((state) => state.user);

  const [countPaper, setCountPaper] = useState({
    countNewsPaper: 0,
    countPoint: 0,
  });

  const { mutate, error, isLoading } = useMutation(
    "countPoints",
    PointServices.AllPointsById,
    {
      // @ts-ignore
      onSuccess: (data: Data[]) => {
        let total = 0;
        console.log(data);
        data.forEach((item) => {
          total += parseInt(item.count);
        });
        setCountPaper({
          countNewsPaper: total,
          countPoint: data.length,
        });
      },
      onError: (error: any) => {
        // @ts-ignore
        alert(error.message, "error");
      },
    }
  );

  useEffect(() => {
    if (user) {
      mutate(`${user?.id}`);
    }
  }, [user]);

  return { isLoading, countPaper, error };
};

export default useCountPoints;
