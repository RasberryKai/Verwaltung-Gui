import { Accordion, Select } from "@mantine/core";
import Card, { CardProps } from "./Card";
import dayjs from "dayjs";

export default function ExpandableCard(props: CardProps) {
    return (
        <Accordion variant={"separated"} radius={"md"} defaultChecked={false}>
            <Accordion.Item value={"default"}>
                <Accordion.Control>
                    <Card medium={props.medium} className={props.className} />
                    <Accordion.Panel>
                        <p className={"text-white"}>{props.medium.description}</p>
                        <p>{dayjs(props.medium.publishDate).format("DD.MM.YYY")}</p>
                        <Select
                            size={"md"}
                            withAsterisk
                            label={"Condition"}
                            data={[
                                { label: "New", value: "1" },
                                { label: "Good", value: "2" },
                                { label: "Used", value: "3" },
                                { label: "Bad", value: "4" },
                            ]}
                        />
                    </Accordion.Panel>
                </Accordion.Control>
            </Accordion.Item>
        </Accordion>
    );
}
