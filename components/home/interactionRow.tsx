import { TextInput } from "@mantine/core";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { colors } from "../../constants/colors";
import TagSelection from "./tagSelection";

export interface TagDrillingProps {
  filters: string[];
  setFilters: (tags: string[]) => void;
}

export default function InteractionRow(props: TagDrillingProps) {
  return (
    <div className={"w-full h-16 flex flex-row items-center"}>
      <div className={"w-1/2"}>
        <TagSelection filters={props.filters} setFilters={props.setFilters} />
      </div>
      <div className={"w-1/2 flex flex-row justify-end"}>
        <div className={"w-4/5"}>
          <TextInput
            placeholder={"Search"}
            rightSection={
              <HiMagnifyingGlass
                color={colors.ORANGE}
                size={40}
                className={"mr-2"}
              />
            }
            radius="md"
            className={"w-full"}
            size={"lg"}
          />
        </div>
      </div>
    </div>
  );
}
