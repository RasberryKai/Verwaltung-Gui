interface TagProps {
  text: string;
  isBlockbuster?: boolean;
}

export default function TextTag(props: TagProps) {
  return (
    <div
      className={`${
        props.isBlockbuster ? "border-gold" : "border-orange"
      } border-2 rounded-2xl flex flex-row justify-center items-center`}
    >
      <p className={props.isBlockbuster ? "text-gold" : "text-orange"}>
        {props.text}
      </p>
    </div>
  );
}
