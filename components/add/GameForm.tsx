import { useForm } from "@mantine/form";

export default function GameForm() {
    const form = useForm({
        initialValues: {
            publisher: "",
            // switch
            platform: "",
            // switch
            ageRating: 0,
        },
    });
    return (
        <div>
            <p>GameForm</p>
        </div>
    );
}