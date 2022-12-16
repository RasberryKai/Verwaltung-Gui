import { Autocomplete, MultiSelect, Select, Switch, TextInput, useMantineTheme } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconCheck, IconX } from "@tabler/icons";
import { useState } from "react";

interface DefaultFormProps {
    form: any;
}

export default function DefaultForm(props: DefaultFormProps) {
    const theme = useMantineTheme();
    const [checked, setChecked] = useState<boolean>(true);
    const handleSubmit = (values: any) => {};

    return (
        <form
            className={"grid grid-rows-6 gap-4"}
            onSubmit={props.form.onSubmit((values: any) => handleSubmit(values))}
        >
            <TextInput size={"md"} withAsterisk label={"Name"} placeholder={"Herr der Ringe"} />
            <TextInput size={"md"} withAsterisk label={"description"} placeholder={"Ein Buch über Ringe"} />
            <DatePicker size={"md"} label={"Publish Date"} withAsterisk placeholder={"20.01.2004"} />
            <MultiSelect
                size={"md"}
                label={"Category"}
                withAsterisk
                searchable
                placeholder={"Fantasy"}
                data={["Fantasy", "Sci-Fi"]}
            />
            {/* Condition */}
            <Select size={"md"} withAsterisk label={"Condition"} placeholder={"new"} data={[]} />
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
            />
        </form>
    );
}
