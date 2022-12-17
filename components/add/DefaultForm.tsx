import { MultiSelect, Select, Switch, TextInput, useMantineTheme } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconCheck, IconX } from "@tabler/icons";
import { useState } from "react";

interface DefaultFormProps {
    form: any;
    formRef: any;
}

export default function DefaultForm(props: DefaultFormProps) {
    const theme = useMantineTheme();
    const [checked, setChecked] = useState<boolean>(true);
    const handleSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <form
            className={"grid grid-rows-6 gap-4"}
            ref={props.formRef}
            onSubmit={props.form.onSubmit((values: any) => handleSubmit(values))}
        >
            <TextInput
                size={"md"}
                withAsterisk
                label={"Name"}
                placeholder={"Herr der Ringe"}
                {...props.form.getInputProps("name")}
            />
            <TextInput
                size={"md"}
                withAsterisk
                label={"Description"}
                placeholder={"Ein Buch über Ringe"}
                {...props.form.getInputProps("description")}
            />
            <DatePicker size={"md"} label={"Publish Date"} withAsterisk {...props.form.getInputProps("publishDate")} />
            <MultiSelect
                size={"md"}
                label={"Category"}
                withAsterisk
                searchable
                placeholder={"Fantasy"}
                data={["Fantasy", "Sci-Fi"]}
                {...props.form.getInputProps("category")}
            />
            {/* Condition */}
            <Select
                size={"md"}
                withAsterisk
                label={"Condition"}
                data={["New", "Good", "Used", "Bad"]}
                {...props.form.getInputProps("condition")}
            />
            <Switch
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                color="teal"
                size="md"
                label="Available"
                thumbIcon={
                    checked ? (
                        <IconCheck size={12} color={theme.colors.teal[theme.fn.primaryShade()]} stroke={3} />
                    ) : (
                        <IconX size={12} color={theme.colors.red[theme.fn.primaryShade()]} stroke={3} />
                    )
                }
                {...props.form.getInputProps("available")}
            />
        </form>
    );
}
