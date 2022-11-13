export default function AlignMid(props: any) {
  return (
    <div
      className={"w-full h-screen bg-accent flex flex-col items-center pt-6"}
    >
      <div className={"w-11/12"}>{props.children}</div>
    </div>
  );
}
