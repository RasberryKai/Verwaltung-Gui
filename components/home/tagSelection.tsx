import Tag from "./tag";
import { TagDrillingProps } from "./interactionRow";

export default function TagSelection(props: TagDrillingProps) {
  return (
    <div className={"w-9/12 grid grid-cols-3"}>
      <Tag
        onClick={() => {
          if (props.selectedTags.includes("Books"))
            props.setSelectedTags(
              props.selectedTags.filter((tag) => tag !== "Books")
            );
          else props.setSelectedTags([...props.selectedTags, "Books"]);
        }}
        isSelected={props.selectedTags.includes("Books")}
      >
        Books
      </Tag>
      <Tag
        onClick={() => {
          if (props.selectedTags.includes("Games"))
            props.setSelectedTags(
              props.selectedTags.filter((tag) => tag !== "Games")
            );
          else props.setSelectedTags([...props.selectedTags, "Games"]);
        }}
        isSelected={props.selectedTags.includes("Games")}
      >
        Games
      </Tag>
      <Tag
        onClick={() => {
          if (props.selectedTags.includes("Movies"))
            props.setSelectedTags(
              props.selectedTags.filter((tag) => tag !== "Movies")
            );
          else props.setSelectedTags([...props.selectedTags, "Movies"]);
        }}
        isSelected={props.selectedTags.includes("Movies")}
      >
        Movies
      </Tag>
    </div>
  );
}
