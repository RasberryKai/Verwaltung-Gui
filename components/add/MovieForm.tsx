import { Chip, NumberInput, Select, TextInput } from "@mantine/core";

export default function MovieForm(props: { form: any }) {
    const { form } = props;
    return (
        <form className={"grid grid-rows-3 animate-fade"}>
            <NumberInput
                label={"Duration"}
                withAsterisk
                size={"md"}
                placeholder={"Duration in minutes"}
                {...form.getInputProps("duration")}
                className={"mb-6"}
            />
            <Select
                label={"Age Rating"}
                withAsterisk
                size={"md"}
                data={[
                    {
                        label: "6+",
                        value: 6,
                    },
                    {
                        label: "12+",
                        value: 12,
                    },
                    {
                        label: "16+",
                        value: 16,
                    },
                    {
                        label: "18+",
                        value: 18,
                    },
                ]}
                {...form.getInputProps("ageRating")}
            />
            <Chip className={"mt-4"} defaultChecked color={"yellow"} variant={"filled"} size={"md"}>
                Blockbuster
            </Chip>
            <TextInput
                label={"Regisseur"}
                withAsterisk
                size={"md"}
                placeholder={"George Lucas"}
                {...form.getInputProps("regisseur")}
            />
        </form>
    );
}
