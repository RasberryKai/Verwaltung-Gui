export default function ItemCanvas(props: any) {
  return (
    <div className={`bg-secondary rounded-2xl ${props.className}`}>
      {props.children}
    </div>
  );
}
