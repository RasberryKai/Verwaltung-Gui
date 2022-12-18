import Tag from "./Tag";
import { TagDrillingProps } from "./InteractionRow";

interface TagSelectionProps extends TagDrillingProps {
    className?: string;
    tagNames?: {
        first?: string;
        second?: string;
        third?: string;
    };
}

export default function TagSelection(props: TagSelectionProps) {
    return (
        <div className={`flex flex-row justify-between ${props.className} w-10/12`}>
            <Tag
                onClick={() => {
                    if (props.filter === "Books") {
                        props.setFilter(null);
                        return;
                    }
                    props.setFilter("Books");
                }}
                isSelected={props.filter === "Books"}
            >
                {props.tagNames?.first ?? "Books"}
            </Tag>
            <Tag
                onClick={() => {
                    if (props.filter === "Games") {
                        props.setFilter(null);
                        return;
                    }
                    props.setFilter("Games");
                }}
                isSelected={props.filter === "Games"}
            >
                {props.tagNames?.second ?? "Games"}
            </Tag>
            <Tag
                onClick={() => {
                    if (props.filter === "Movies") {
                        props.setFilter(null);
                        return;
                    }
                    props.setFilter("Movies");
                }}
                isSelected={props.filter === "Movies"}
            >
                {props.tagNames?.third ?? "Movies"}
            </Tag>
        </div>
    );
}
