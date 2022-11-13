import Tag from "./tag";
import { TagDrillingProps } from "./interactionRow";

export default function TagSelection(props: TagDrillingProps) {
  return (
    <div className={"w-10/12 grid grid-cols-3"}>
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
        Books
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
        Games
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
        Movies
      </Tag>
    </div>
  );
}
