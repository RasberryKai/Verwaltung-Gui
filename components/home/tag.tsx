export default function Tag(props: any) {
  return (
    <button
      className={`bg-primary rounded-3xl h-10 w-40 ${
        props.isSelected ? "border-2 border-white" : ""
      }`}
      onClick={props.onClick}
    >
      <p className={"text-orange-500"}>{props.children}</p>
    </button>
  );
}
