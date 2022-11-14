import { TagDrillingProps } from "../home/interactionRow";
import { fetcher } from "../../lib/Axios";
import useSWR from "swr";
import MovieCard from "./movieCard";

interface ItemDisplayProps extends TagDrillingProps {
  className?: string;
}

export default function ItemDisplay(props: ItemDisplayProps) {
  const { data, error } = useSWR("/api/movie", fetcher);
  console.log(data);

  // if (error) return <LoadError />;
  // if (!data) return <div>Loading...</div>;

  return (
    <div className={"p-6"}>
      <MovieCard
        movie={{
          name: "test",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.fj oapsjdfoiapsjfopiasjfodpi sajf oisadjfoi asjfoisa jdfouasj dfoiajwdofpi jasoifj.",
          publishDate: "20.01.2006",
          category: "action",
          condition: 1,
          duration: 100000,
          ageRating: 18,
          blockbuster: true,
          regisseur: "test",
        }}
      />
    </div>
  );
}
