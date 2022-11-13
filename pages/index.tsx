import InteractionRow from "../components/home/interactionRow";
import { useState } from "react";

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  // TODO add item list
  return (
    <div>
      <InteractionRow
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
    </div>
  );
}
