import { Movie } from "../../utils/Models";
import TextTag from "./textTag";

interface MovieCardProps {
  movie: Movie;
}

const getColor = (age: number) => {
  switch (age) {
    case 0:
      return "text-white";
    case 6:
      return "text-yellow";
    case 12:
      return "text-green";
    case 16:
      return "text-blue";
    case 18:
      return "text-red";
  }
};

export default function MovieCard(props: MovieCardProps) {
  const data = props.movie;

  return (
    <div className={"w-3/12 h-2/5 bg-primary rounded-lg p-2"}>
      <div className={"w-full flex flex-row justify-between items-center pb-2"}>
        <p className={"text-orange text-3xl"}>{data.name}</p>
        <p className={getColor(data.ageRating)}>FSK {data.ageRating}</p>
      </div>
      <div className={"w-full h-4/6 overflow-scroll text-orange2 pr-2"}>
        {data.description}
      </div>
      <div className={"w-full mt-2.5"}>
        <div className={"flex flex-row justify-between items-center"}>
          <div className={"w-3/5 grid grid-cols-2 gap-2"}>
            <TextTag text={"Test"} />
            {data.blockbuster ? (
              <TextTag isBlockbuster={true} text={"Blockbuster"} />
            ) : null}
          </div>
          <div className={"text-orange"}>{data.duration}</div>
        </div>
      </div>
    </div>
  );
}
