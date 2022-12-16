import { useForm } from "@mantine/form";

export default function MovieForm() {
    const form = useForm({
        initialValues: {
            // numberInput
            duration: 0,
            // toggle
            ageRating: 0,
            // toggle
            blockbuster: false,
        },
    });
    return (
        <div>
            <p>MovieForm</p>
        </div>
    );
}
