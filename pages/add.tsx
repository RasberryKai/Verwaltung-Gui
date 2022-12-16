import { useState } from "react";
import TagSelection from "../components/home/tagSelection";
import { useForm } from "@mantine/form";
import BookForm from "../components/add/BookForm";
import GameForm from "../components/add/GameForm";
import MovieForm from "../components/add/MovieForm";
import { Autocomplete, MultiSelect, Select, Switch, TextInput, useMantineTheme } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconCheck, IconX } from "@tabler/icons";
import DefaultForm from "../components/add/DefaultForm";

export default function Add() {
    const [type, setType] = useState<string | null>(null);
    const [checked, setChecked] = useState<boolean>(true);
    const theme = useMantineTheme();
    const defaultForm = useForm({
        initialValues: {
            name: "",
            description: "",
            // date input
            publishDate: "",
            // switcher
            category: "",
            // toggle
            available: true,
            // toggle
            condition: 0,
        },
    });

    const formToRender = () => {
        if (type === "Books") {
            return <BookForm />;
        } else if (type === "Games") {
            return <GameForm />;
        } else if (type === "Movies") {
            return <MovieForm />;
        } else {
            return <div>Nothing</div>;
        }
    };

    return (
        <div className={"w-full h-full"}>
            <div className={"flex flex-row justify-end "}>
                <div className={"w-2/3 flex flex-row justify-end"}>
                    <TagSelection filter={type} setFilter={setType} />
                </div>
            </div>
            <div>
                <DefaultForm form={defaultForm} />
                {formToRender()}
            </div>
        </div>
    );
}
