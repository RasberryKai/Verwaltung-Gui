import { NumberInput, TextInput } from "@mantine/core";

export default function BookForm(props: { form: any }) {
    const { form } = props;
    return (
        <form className={"grid grid-rows-4 gap-4"}>
            <TextInput
                label={"Publisher"}
                withAsterisk
                size={"md"}
                placeholder={"Harper Collins"}
                {...form.getInputProps("publisher")}
            />
            <TextInput
                label={"Author"}
                withAsterisk
                size={"md"}
                placeholder={"J.R.R. Tolkien"}
                {...form.getInputProps("author")}
            />
            <TextInput
                label={"ISBN"}
                withAsterisk
                size={"md"}
                placeholder={"978-0-00713-659-9"}
                {...form.getInputProps("isbn")}
            />
            <NumberInput
                label={"Pages"}
                withAsterisk
                size={"md"}
                placeholder={"1216"}
                {...form.getInputProps("pages")}
            />
        </form>
    );
}
