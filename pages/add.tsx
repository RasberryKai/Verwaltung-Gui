import { useState } from "react";
import TagSelection from "../components/home/tagSelection";
import { useForm } from "@mantine/form";
import BookForm from "../components/add/BookForm";
import GameForm from "../components/add/GameForm";
import MovieForm from "../components/add/MovieForm";
import {
    Autocomplete,
    Select,
    Switch,
    TextInput,
    useMantineTheme,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import theme from "tailwindcss/defaultTheme";
import { IconCheck, IconX } from "@tabler/icons";

export default function Add() {
    const [type, setType] = useState<string | null>(null);
    const [checked, setChecked] = useState<boolean>(true);
    const theme = useMantineTheme();
    const form = useForm({
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

    const handleSubmit = (values: any) => {};

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
            <div className={"flex flex-row justify-between"}>
                <TagSelection
                    className={"w-full"}
                    filter={type}
                    setFilter={setType}
                />
                <div className={"w-1/2"}></div>
            </div>
            <div>
                <form
                    onSubmit={form.onSubmit((values) => handleSubmit(values))}
                >
                    <TextInput
                        withAsterisk
                        label={"Name"}
                        placeholder={"Herr der Ringe"}
                    />
                    <TextInput
                        withAsterisk
                        label={"description"}
                        placeholder={"Ein Buch über Ringe"}
                    />
                    <DatePicker
                        label={"Publish Date"}
                        withAsterisk
                        placeholder={"20.01.2004"}
                    />
                    <Autocomplete
                        label={"Category"}
                        withAsterisk
                        placeholder={"Fantasy"}
                        data={["Fantasy", "Sci-Fi"]}
                    />
                    <Switch
                        checked={checked}
                        onChange={(event) =>
                            setChecked(event.currentTarget.checked)
                        }
                        color="teal"
                        size="md"
                        label="Available"
                        thumbIcon={
                            checked ? (
                                <IconCheck
                                    size={12}
                                    color={
                                        theme.colors.teal[
                                            theme.fn.primaryShade()
                                        ]
                                    }
                                    stroke={3}
                                />
                            ) : (
                                <IconX
                                    size={12}
                                    color={
                                        theme.colors.red[
                                            theme.fn.primaryShade()
                                        ]
                                    }
                                    stroke={3}
                                />
                            )
                        }
                    />
                    {/* Condition */}
                    <Select data={[]} />
                </form>
            </div>
            {formToRender()}
        </div>
    );
}
