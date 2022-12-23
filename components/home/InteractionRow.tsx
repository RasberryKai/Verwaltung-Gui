import TagSelection from "./TagSelection";

export interface TagDrillingProps {
    filter: string | null;
    setFilter: (tags: string | null) => void;
}

export default function InteractionRow(props: TagDrillingProps) {
    return (
        <div className={"w-full h-16 flex flex-row items-center"}>
            <div className={"w-2/3"}>
                <TagSelection filter={props.filter} setFilter={props.setFilter} />
            </div>
            <div className={"w-1/2 flex flex-row justify-end"} />
        </div>
    );
}
