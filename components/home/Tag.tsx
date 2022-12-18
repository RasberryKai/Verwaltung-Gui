export default function Tag(props: any) {
    return (
        <button
            className={`rounded-2xl h-10 w-40 ${
                props.isSelected ? "bg-white" : "bg-primary"
            }`}
            onClick={props.onClick}
        >
            <p className={"text-orange"}>{props.children}</p>
        </button>
    );
}
