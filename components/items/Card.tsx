import { Medium, MediumType } from "../../utils/Models";
import { Badge, Button, Divider, Select, Switch, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import SplitText from "../home/SplitText";
import BigText from "../home/BigText";
import { IconCheck, IconX } from "@tabler/icons";
import { showNotification } from "@mantine/notifications";
import axios from "axios";

export interface CardProps {
    medium: Medium;
    type: MediumType;
    className?: string;
}

export default function Card(props: CardProps) {
    const data = props.medium;
    const theme = useMantineTheme();
    const [updated, setUpdated] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [available, setAvailable] = useState<boolean>(data.available);
    const [condition, setCondition] = useState<number>(data.condition);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!open && !updated) {
            setAvailable(data.available);
            setCondition(data.condition);
        }
    }, [open]);

    if (!data.name) return null;
    if (deleted) return null;

    const handleClick = () => {
        setOpen(!open);
    };

    const getURL = () => {
        setLoading(true);
        let url = "";
        switch (props.type) {
            case MediumType.BOOK:
                url = "/api/book";
                break;
            case MediumType.GAME:
                url = "/api/game";
                break;
            case MediumType.MOVIE:
                url = "/api/movie";
                break;
        }
        return url + `?id=${data.id}`;
    };

    const updateItem = async () => {
        const url = getURL();
        try {
            await axios.patch("http://localhost:3000" + url, {
                available: available,
                condition: condition,
            });
            showNotification({
                title: "Successfully updated the Item",
                message: "",
                color: "green",
            });
            setUpdated(true);
        } catch (err: any) {
            showNotification({
                title: "Error while updating",
                message: err.message,
                color: "red",
            });
            setLoading(false);
            return;
        }

        setOpen(false);
        setLoading(false);
    };

    const removeItem = async () => {
        const url = getURL();
        try {
            await axios.delete("http://localhost:3000" + url);
            showNotification({
                title: "Successfully deleted the item",
                message: "",
                color: "green",
            });
            setDeleted(true);
        } catch (err: any) {
            showNotification({
                title: "Error while deleting",
                message: err.message,
                color: "red",
            });
            setLoading(false);
            return;
        }

        setOpen(false);
        setLoading(false);
    };

    return (
        <div className={`w-full bg-primary rounded-lg ${props.className}`}>
            <button className={"w-full h-24"} onClick={handleClick}>
                <div className={"w-full h-full flex flex-col justify-center pl-6 p-2"}>
                    <div className={"flex flex-row justify-between items-center"}>
                        <p className={"text-white text-2xl font-bold"}>{data.name}</p>
                    </div>
                    <div className={"flex flex-row items-center mt-2"}>
                        <div className={"flex flex-row"}>
                            {data.category &&
                                data.category.map((category, index) => (
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
            {open && (
                <div className={"w-full pl-6 pb-5 animate-fade"}>
                    <Divider className={"mr-6 mb-3"} />
                    <div className={"grid grid-rows-2 gap-6"}>
                        <div className={"grid grid-cols-2"}>
                            <SplitText>
                                <BigText>Description</BigText>
                                <p className={"text-white"}>{data.description}</p>
                            </SplitText>
                            <SplitText>
                                <BigText>Publish Date</BigText>
                                <p className={"text-white"}>{dayjs(data.publishDate).format("DD.MM.YYYY")}</p>
                            </SplitText>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <SplitText>
                                <BigText>Condition</BigText>
                                <Select
                                    size={"md"}
                                    className={"w-1/2"}
                                    data={[
                                        { label: "New", value: "1" },
                                        { label: "Good", value: "2" },
                                        { label: "Used", value: "3" },
                                        { label: "Bad", value: "4" },
                                    ]}
                                    value={condition.toString()}
                                    onChange={(value) => {
                                        if (value) setCondition(parseInt(value));
                                    }}
                                />
                            </SplitText>
                            <SplitText>
                                <BigText>Available</BigText>
                                <Switch
                                    checked={available}
                                    onChange={() => setAvailable(!available)}
                                    color="teal"
                                    size="md"
                                    label="Available"
                                    thumbIcon={
                                        available ? (
                                            <IconCheck
                                                size={12}
                                                color={theme.colors.teal[theme.fn.primaryShade()]}
                                                stroke={3}
                                            />
                                        ) : (
                                            <IconX
                                                size={12}
                                                color={theme.colors.red[theme.fn.primaryShade()]}
                                                stroke={3}
                                            />
                                        )
                                    }
                                />
                            </SplitText>
                        </div>
                    </div>
                    <div className={"w-11/12 flex flex-row justify-start"}>
                        <Button
                            loading={isLoading}
                            className={"mt-4"}
                            variant={"outline"}
                            color={"green"}
                            onClick={updateItem}
                        >
                            Save
                        </Button>
                        <Button
                            loading={isLoading}
                            className={"mt-4 ml-6"}
                            variant={"outline"}
                            color={"red"}
                            onClick={removeItem}
                        >
                            Remove
                        </Button>
                        {/* TODO: Add Remove Button */}
                    </div>
                </div>
            )}
        </div>
    );
}
