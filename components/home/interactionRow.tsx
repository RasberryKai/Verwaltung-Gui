import { TextInput } from "@mantine/core";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { colors } from "../../constants/colors";
import TagSelection from "./tagSelection";

export interface TagDrillingProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export default function InteractionRow(props: TagDrillingProps) {
  return (
    <div className={"w-full h-16 flex flex-row items-center"}>
      <div className={"w-1/2"}>
        <TagSelection
          selectedTags={props.selectedTags}
          setSelectedTags={props.setSelectedTags}
        />
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
            className={"w-full"}
            size={"lg"}
          />
        </div>
      </div>
    </div>
  );
}
