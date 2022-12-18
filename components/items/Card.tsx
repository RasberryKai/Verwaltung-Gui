import { Medium } from "../../utils/Models";
import { useRouter } from "next/router";
import { Badge } from "@mantine/core";
import { useState } from "react";

export interface CardProps {
    medium: Medium;
    className?: string;
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

    return (
        <button className={`w-full h-18 ${props.className}`}>
            <div className={"w-full h-full rounded-lg flex flex-col justify-between p-2"}>
                <div className={"flex flex-row justify-between items-center"}>
                    <p className={"text-white text-2xl font-bold"}>{data.name}</p>
                </div>
                <div className={"flex flex-row justify-between items-center mt-2"}>
                    <div className={"flex flex-row"}>
                        {data.category.map((category, index) => (
                            <>
                                <Badge key={index} color="orange" variant="light">
                                    {category}
                                </Badge>
                                <div className={"mr-2"} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </button>
    );
}
/*
<p className={`text-base ${getConditionColor(data.condition)}`}>{getCondition(data.condition)}</p>
<p className={data.available ? "text-green" : "text-red"}>
                        {data.available ? "Available" : "Borrowed"}
                    </p>
 */
