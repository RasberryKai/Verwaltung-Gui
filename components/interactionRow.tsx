import { TextInput } from "@mantine/core";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { colors } from "../constants/colors";

export default function InteractionRow() {
  // TODO add tags
  return (
    <div className={"w-full h-16 flex flex-row items-center"}>
      <div className={"w-1/2"}></div>
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
