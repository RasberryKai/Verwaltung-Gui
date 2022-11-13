import Tag from "./tag";
import { useState } from "react";

export default function TagSelection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className={"w-11/12 grid grid-cols-3"}>
      <Tag
        onClick={() => {
          if (selectedTags.includes("Books"))
            setSelectedTags(selectedTags.filter((tag) => tag !== "Books"));
          else setSelectedTags([...selectedTags, "Books"]);
        }}
        isSelected={selectedTags.includes("Books")}
      >
        Books
      </Tag>
      <Tag
        onClick={() => {
          if (selectedTags.includes("Games"))
            setSelectedTags(selectedTags.filter((tag) => tag !== "Games"));
          else setSelectedTags([...selectedTags, "Games"]);
        }}
        isSelected={selectedTags.includes("Games")}
      >
        Games
      </Tag>
      <Tag
        onClick={() => {
          if (selectedTags.includes("Movies"))
            setSelectedTags(selectedTags.filter((tag) => tag !== "Movies"));
          else setSelectedTags([...selectedTags, "Movies"]);
        }}
        isSelected={selectedTags.includes("Movies")}
      >
        Movies
      </Tag>
    </div>
  );
}
