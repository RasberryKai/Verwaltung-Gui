import { useState } from "react";
import TagSelection from "../components/home/tagSelection";
import { useForm } from "@mantine/form";
import BookForm from "../components/add/BookForm";
import GameForm from "../components/add/GameForm";
import MovieForm from "../components/add/MovieForm";
import DefaultForm from "../components/add/DefaultForm";
import SplitForm from "../components/add/SplitForm";
import { Button } from "@mantine/core";
import useWindowDimensions from "../utils/useWindowDimensions";
import AddSteps from "../components/add/AddSteps";
import { useRouter } from "next/router";

export default function Add() {
    const router = useRouter();
    const [type, setType] = useState<string | null>(null);
    const [active, setActive] = useState<number>(0);
    const { height } = useWindowDimensions();

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
    const bookForm = useForm({
        initialValues: {
            publisher: "",
            author: "",
            isbn: "",
            pages: 0,
        },
        validate: {
            pages: (value) => {
                if (value <= 0) return "Pages must be greater than 0";
            },
        },
    });
    const gameForm = useForm({
        initialValues: {
            publisher: "",
            // switch
            platform: "",
            // switch
            ageRating: 0,
        },
        validate: {
            ageRating: (value) => {
                if (value < 0) return "Age rating must be greater than 0";
                if (value !== 6 && value !== 12 && value !== 16 && value !== 18)
                    return "Age rating must be 6, 12, 16 or 18";
            },
        },
    });
    const movieForm = useForm({
        initialValues: {
            // numberInput
            duration: 0,
            // toggle
            ageRating: 0,
            // toggle
            blockbuster: false,
        },
    });

    const formToRender = () => {
        if (type === "Books") {
            return <BookForm form={bookForm} handleSubmit={() => {}} />;
        } else if (type === "Games") {
            return <GameForm form={gameForm} />;
        } else if (type === "Movies") {
            return <MovieForm form={movieForm} />;
        } else {
            // TODO: Add Select for type info
            return <div className={"text-orange"}>Nothing</div>;
        }
    };

    return (
        <div className={"w-full h-full pl-10 pr-10 overflow-scroll"}>
            <div className={"flex flex-row justify-end"}>
                <div className={"w-2/3 flex flex-row justify-end"}>
                    <AddSteps activeStep={active} setActiveStep={setActive} />
                </div>
            </div>
            <div className={"mt-10 pb-4"}>
                {active === 0 && (
                    <SplitForm name={"Default"} className={"animate-fade"}>
                        <DefaultForm form={defaultForm} />
                    </SplitForm>
                )}
                {active === 1 && (
                    <SplitForm name={"Specific"} className={"animate-fade"}>
                        {formToRender()}
                    </SplitForm>
                )}
            </div>
            <div className={"flex flex-row justify-end mt-4"}>
                <Button
                    color={"orange"}
                    variant={"outline"}
                    className={"ml-4 mb-4 absolute bottom-1/4"}
                    size={"md"}
                    onClick={() => {
                        if (active === 0) {
                            setActive(1);
                        } else {
                            setActive(2);
                            setTimeout(() => {
                                setActive(0);
                            }, 1000);
                        }
                    }}
                >
                    {active === 0 ? "Next" : "Finish"}
                </Button>
            </div>
        </div>
    );
}
