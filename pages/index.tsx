import InteractionRow from "../components/home/interactionRow";
import { useState } from "react";
import ItemDisplay from "../components/items/itemDisplay";
import ItemCanvas from "../components/items/ItemCanvas";

export default function Home() {
  const [filters, setFilters] = useState<string[]>([]);
  // TODO add item list
  return (
    <div className={"h-screen"}>
      <InteractionRow filters={filters} setFilters={setFilters} />
      <ItemCanvas className={"inline-grid w-full h-4/5 mt-16"}>
        <ItemDisplay filters={filters} setFilters={setFilters} />
      </ItemCanvas>
    </div>
  );
}
