import { useForm } from "@mantine/form";

export default function BookForm() {
    const form = useForm({
        initialValues: {
            publisher: "",
            author: "",
            isbn: "",
            pages: 0,
        },
        validate: {
            isbn: (value) => {
                // add isbn validation
                return true;
            },
        },
    });
    return (
        <div>
            <p className={"text-orange"}>BookForm</p>
        </div>
    );
}
