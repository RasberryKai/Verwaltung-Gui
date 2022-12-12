import { TagDrillingProps } from "../home/interactionRow";
import { fetcher } from "../../lib/Axios";
import useSWR from "swr";
import Card from "./card";
import LoadError from "./error";
import { Medium } from "../../utils/Models";

interface ItemDisplayProps extends TagDrillingProps {
    className?: string;
}

export default function ItemDisplay(props: ItemDisplayProps) {
    const { data, error } = useSWR("/api/items", fetcher);

    if (error) return <LoadError />;
    if (!data) return <div>Loading...</div>;

    return (
        <div className={`p-4 ${props.className}`}>
            {data.movies.map((item: Medium) => {
                if (!props.filter || props.filter === "Movies")
                    return (
                        <>
                            <Card
                                key={item.id}
                                medium={{
                                    id: item.id,
                                    name: item.name,
                                    description: item.description,
                                    publishDate: item.publishDate,
                                    category: item.category,
                                    available: item.available,
                                    condition: item.condition,
                                }}
                            />
                            <div className={"mb-2"} />
                        </>
                    );
            })}
            {data.games.map((item: Medium) => {
                if (!props.filter || props.filter === "Games")
                    return (
                        <>
                            <Card
                                key={item.id}
                                medium={{
                                    id: item.id,
                                    name: item.name,
                                    description: item.description,
                                    publishDate: item.publishDate,
                                    category: item.category,
                                    available: item.available,
                                    condition: item.condition,
                                }}
                            />
                            <div className={"mb-2"} />
                        </>
                    );
            })}
            {data.books.map((item: Medium) => {
                if (!props.filter || props.filter === "Books")
                    return (
                        <>
                            <Card
                                key={item.id}
                                medium={{
                                    id: item.id,
                                    name: item.name,
                                    description: item.description,
                                    publishDate: item.publishDate,
                                    category: item.category,
                                    available: item.available,
                                    condition: item.condition,
                                }}
                            />
                            <div className={"mb-2"} />
                        </>
                    );
            })}
        </div>
    );
}
