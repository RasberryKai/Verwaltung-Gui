import InteractionRow from "../components/home/interactionRow";
import { useState } from "react";
import ItemDisplay from "../components/home/itemDisplay";

export default function Home() {
  const [filters, setFilters] = useState<string[]>([]);
  // TODO add item list
  return (
    <div className={"h-screen"}>
      <InteractionRow filters={filters} setFilters={setFilters} />
      <ItemDisplay
        filters={filters}
        setFilters={setFilters}
        className={"inline-grid w-full h-4/5 mt-16"}
      />
    </div>
  );
}
