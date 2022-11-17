import { Medium } from "../../utils/Models";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

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
    const [isHovered, setIsHovered] = useState(false);

    const onCardClick = (e: any) => {
        e.preventDefault();
        router.push(`/items/${data.id}`);
    };

    return (
        <button className={"w-full h-18"} onClick={onCardClick}>
            {/* Main Container */}
            <div
                className={
                    "w-full h-full bg-primary rounded-lg flex flex-row justify-between p-2"
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Left Container */}
                <div className={"flex flex-col justify-between items-start"}>
                    <p className={"text-white text-2xl font-bold"}>
                        {data.name}
                    </p>
                    <p className={"text-white"}>{data.category}</p>
                </div>
                {/* Right Container */}
                <div className={"flex flex-row"}>
                    {/* Info Container */}
                    <div
                        className={
                            "h-full flex flex-col justify-between items-end"
                        }
                    >
                        <p
                            className={
                                data.available ? "text-green" : "text-red"
                            }
                        >
                            {data.available ? "Available" : "Borrowed"}
                        </p>
                        <p
                            className={`text-base ${getConditionColor(
                                data.condition
                            )}`}
                        >
                            {getCondition(data.condition)}
                        </p>
                    </div>
                    <div className={`ml-4 ${isHovered ? "" : "hidden"}`}>
                        <Image
                            src={require("../../public/delete.png")}
                            alt={"Delete"}
                            className={"h-14 w-auto scale-100"}
                            onClick={() => console.log("delete")}
                        />
                    </div>
                </div>
            </div>
        </button>
    );
}
