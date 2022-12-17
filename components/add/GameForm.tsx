import { Select, TextInput } from "@mantine/core";

export default function GameForm(props: { form: any }) {
    const { form } = props;

    return (
        <form className={"grid grid-rows-4 gap-4 animate-fade"}>
            <TextInput
                label={"Publisher"}
                withAsterisk
                size={"md"}
                placeholder={"Ubisoft"}
                {...form.getInputProps("publisher")}
            />
            <Select
                label={"Platform"}
                withAsterisk
                size={"md"}
                placeholder={"PC"}
                data={["PC", "Xbox", "Playstation", "Nintendo"]}
                {...form.getInputProps("platform")}
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
        </form>
    );
}
