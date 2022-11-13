import { TagDrillingProps } from "./interactionRow";

interface ItemDisplayProps extends TagDrillingProps {
  className?: string;
}

export default function ItemDisplay(props: ItemDisplayProps) {
  return (
    <div className={`bg-secondary ${props.className}`}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum eum ex
        minima officia quae unde vero voluptates? Aliquam beatae dignissimos
        eius, et fugiat iure libero nostrum odio possimus tempora!
      </p>
    </div>
  );
}
