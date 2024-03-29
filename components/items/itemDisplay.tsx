import { TagDrillingProps } from "../home/InteractionRow";
import { fetcher } from "../../lib/Axios";
import useSWR from "swr";
import LoadError from "./Error";
import { MediumType } from "../../utils/Models";
import CircleLoad from "../loaders/CircleLoad";
import Card from "./Card";

interface ItemDisplayProps extends TagDrillingProps {
    className?: string;
}

export default function ItemDisplay(props: ItemDisplayProps) {
    const { data, error } = useSWR("/api/items", fetcher);

    if (error) return <LoadError />;
    if (!data) return <CircleLoad />;

    return (
        <div className={`p-4 animate-fade ${props.className}`}>
            {data.movies.map((item: any) => {
                if (!props.filter || props.filter === "Movies")
                    return (
                        <>
                            <Card
                                key={item.id}
                                medium={{
                                    id: item.entityId,
                                    name: item.name,
                                    description: item.description,
                                    publishDate: item.publishDate,
                                    category: item.category,
                                    available: item.available,
                                    condition: item.condition,
                                }}
                                type={MediumType.MOVIE}
                            />
                            <div className={"mb-2"} />
                        </>
                    );
            })}
            {data.games.map((item: any) => {
                if (!props.filter || props.filter === "Games")
                    return (
                        <>
                            <Card
                                key={item.id}
                                medium={{
                                    id: item.entityId,
                                    name: item.name,
                                    description: item.description,
                                    publishDate: item.publishDate,
                                    category: item.category,
                                    available: item.available,
                                    condition: item.condition,
                                }}
                                type={MediumType.GAME}
                            />
                            <div className={"mb-2"} />
                        </>
                    );
            })}
            {data.books.map((item: any) => {
                if (!props.filter || props.filter === "Books")
                    return (
                        <>
                            <Card
                                key={item.id}
                                medium={{
                                    id: item.entityId,
                                    name: item.name,
                                    description: item.description,
                                    publishDate: item.publishDate,
                                    category: item.category,
                                    available: item.available,
                                    condition: item.condition,
                                }}
                                type={MediumType.BOOK}
                            />
                            <div className={"mb-2"} />
                        </>
                    );
            })}
        </div>
    );
}
