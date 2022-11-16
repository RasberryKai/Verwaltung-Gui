import { TagDrillingProps } from "../home/interactionRow";
import { fetcher } from "../../lib/Axios";
import useSWR from "swr";
import Card from "./card";

interface ItemDisplayProps extends TagDrillingProps {
  className?: string;
}

export default function ItemDisplay(props: ItemDisplayProps) {
  const { data, error } = useSWR("/api/movie", fetcher);
  console.log(data);

  // if (error) return <LoadError />;
  // if (!data) return <div>Loading...</div>;

  return (
    <div className={"p-4"}>
      <Card
        medium={{
          id: "test",
          name: "test",
          description: "lorem ipsum",
          publishDate: "20.10.2021",
          category: "movie",
          available: true,
          condition: 1,
        }}
      />
    </div>
  );
}
