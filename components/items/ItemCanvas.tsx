export default function ItemCanvas(props: any) {
  return (
    <div
      className={`bg-secondary rounded-2xl overflow-scroll ${props.className}`}
    >
      {props.children}
    </div>
  );
}
