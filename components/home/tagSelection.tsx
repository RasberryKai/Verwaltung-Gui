import Tag from "./tag";
import { TagDrillingProps } from "./interactionRow";

export default function TagSelection(props: TagDrillingProps) {
  return (
    <div className={"w-9/12 grid grid-cols-3"}>
      <Tag
        onClick={() => {
          if (props.filters.includes("Books"))
            props.setFilters(props.filters.filter((tag) => tag !== "Books"));
          else props.setFilters([...props.filters, "Books"]);
        }}
        isSelected={props.filters.includes("Books")}
      >
        Books
      </Tag>
      <Tag
        onClick={() => {
          if (props.filters.includes("Games"))
            props.setFilters(props.filters.filter((tag) => tag !== "Games"));
          else props.setFilters([...props.filters, "Games"]);
        }}
        isSelected={props.filters.includes("Games")}
      >
        Games
      </Tag>
      <Tag
        onClick={() => {
          if (props.filters.includes("Movies"))
            props.setFilters(props.filters.filter((tag) => tag !== "Movies"));
          else props.setFilters([...props.filters, "Movies"]);
        }}
        isSelected={props.filters.includes("Movies")}
      >
        Movies
      </Tag>
    </div>
  );
}
