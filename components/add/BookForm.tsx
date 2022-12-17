import { useForm } from "@mantine/form";
import { NumberInput, TextInput } from "@mantine/core";

export default function BookForm(props: { form: any; handleSubmit: (values: any) => void }) {
    const { form, handleSubmit } = props;
    return (
        <form className={"grid grid-rows-4 gap-4"}>
            <TextInput label={"Publisher"} withAsterisk size={"md"} />
            <TextInput label={"Author"} withAsterisk size={"md"} />
            <TextInput label={"ISBN"} withAsterisk size={"md"} />
            <NumberInput label={"Pages"} withAsterisk size={"md"} />
            <NumberInput label={"Pages"} withAsterisk size={"md"} />
        </form>
    );
}
