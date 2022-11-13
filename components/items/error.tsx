import Image from "next/image";

export default function LoadError() {
  return (
    <div className={"h-full w-full flex justify-center items-center"}>
      <Image
        src={require("../../public/cross.png")}
        alt={"Error"}
        className={"scale-50"}
      />
    </div>
  );
}
