import { TagDrillingProps } from "../home/interactionRow";
import { fetcher } from "../../lib/Axios";
import useSWR from "swr";
import LoadError from "./error";
import ItemCanvas from "./ItemCanvas";

interface ItemDisplayProps extends TagDrillingProps {
  className?: string;
}

export default function ItemDisplay(props: ItemDisplayProps) {
  const { data, error } = useSWR("/api/movie", fetcher);
  console.log(data);

  if (error) return <LoadError />;
  if (!data) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}
