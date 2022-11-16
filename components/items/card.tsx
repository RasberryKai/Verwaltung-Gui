import { Medium } from "../../utils/Models";
import { useRouter } from "next/router";

interface CardProps {
  medium: Medium;
}

const getCondition = (condition: number) => {
  switch (condition) {
    case 1:
      return "new";
    case 2:
      return "good";
    case 3:
      return "used";
    case 4:
      return "bad";
    default:
      return "unknown";
  }
};

const getConditionColor = (condition: number) => {
  switch (condition) {
    case 1:
      return "text-green";
    case 2:
      return "text-brightGreen";
    case 3:
      return "text-yellow";
    case 4:
      return "text-red";
    default:
      return "text-gray";
  }
};

export default function Card(props: CardProps) {
  const data = props.medium;
  const router = useRouter();

  const onCardClick = (e: any) => {
    e.preventDefault();
    router.push(`/items/${data.id}`);
  };

  return (
    <button className={"w-full h-18"} onClick={onCardClick}>
      <div
        className={
          "w-full h-full bg-primary rounded-lg flex flex-col justify-between p-2 hover:scale-y-110 transition duration-300 ease-in-out"
        }
      >
        <div className={"flex flex-row justify-between items-center"}>
          <p className={"text-white text-2xl font-bold"}>{data.name}</p>
          <p className={data.available ? "text-green" : "text-red"}>
            {data.available ? "Available" : "Borrowed"}
          </p>
        </div>
        <div className={"flex flex-row justify-between items-center"}>
          <p className={"text-white"}>{data.category}</p>
          <p className={`text-base ${getConditionColor(data.condition)}`}>
            {getCondition(data.condition)}
          </p>
        </div>
      </div>
    </button>
  );
}
