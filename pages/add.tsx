import { useState } from "react";
import TagSelection from "../components/home/tagSelection";
import { useForm } from "@mantine/form";
import BookForm from "../components/add/BookForm";
import GameForm from "../components/add/GameForm";
import MovieForm from "../components/add/MovieForm";
import DefaultForm from "../components/add/DefaultForm";
import SplitForm from "../components/add/SplitForm";

export default function Add() {
    const [type, setType] = useState<string | null>(null);

    // form definitions
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
            // TODO: Add Select for type info
            return <div className={"text-orange"}>Nothing</div>;
        }
    };

    return (
        <div className={"w-full h-full pl-10 pr-10 overflow-scroll"}>
            <div className={"flex flex-row justify-end"}>
                <div className={"w-2/3 flex flex-row justify-end"}>
                    <TagSelection
                        filter={type}
                        setFilter={setType}
                        tagNames={{ first: "Book", second: "Game", third: "Movie" }}
                    />
                </div>
            </div>
            <div className={"mt-10"}>
                <SplitForm name={"Default"}>
                    <DefaultForm form={defaultForm} />
                </SplitForm>
                <SplitForm name={"Specific"} className={"mt-4"}>
                    {formToRender()}
                </SplitForm>
            </div>
        </div>
    );
}
