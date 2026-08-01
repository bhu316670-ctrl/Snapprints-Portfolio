import { useEffect, useState } from "react";
import revenueService, {
  Revenue,
} from "@/services/revenue.service";

export default function useRevenue(
  period:
    | "today"
    | "week"
    | "month"
    | "year"
) {

  const [data, setData] = useState<Revenue[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load() {

      setLoading(true);

      try {

        const rows =
          await revenueService.getRevenue(period);

        setData(rows);

      } finally {

        setLoading(false);

      }

    }

    load();

  }, [period]);

  return {
    data,
    loading,
  };
}