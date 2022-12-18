import { MultiSelect, Select, Switch, TextInput, useMantineTheme } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconCheck, IconX } from "@tabler/icons";
import { categories } from "../../constants/data";

interface DefaultFormProps {
    form: any;
    formRef: any;
}

export default function DefaultForm(props: DefaultFormProps) {
    const theme = useMantineTheme();
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
                data={categories}
                {...props.form.getInputProps("category")}
            />
            {/* Condition */}
            <Select
                size={"md"}
                withAsterisk
                label={"Condition"}
                data={[
                    { label: "New", value: 1 },
                    { label: "Good", value: 2 },
                    { label: "Used", value: 3 },
                    { label: "Bad", value: 4 },
                ]}
                {...props.form.getInputProps("condition")}
            />
            <Switch
                checked={props.form.values.available}
                onChange={() => props.form.setValues(props.form.setValues({ available: !props.form.values.available }))}
                color="teal"
                size="md"
                label="Available"
                thumbIcon={
                    props.form.values.available ? (
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
