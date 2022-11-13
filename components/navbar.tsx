import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar(props: any) {
  const router = useRouter();
  const home = "localhost:3000";
  const add = "localhost:3000/add";
  const settings = "localhost:3000/settings";

  const onHomeClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  const onAddClick = (e: any) => {
    e.preventDefault();
    router.push("/add");
  };

  const onSettingsClick = (e: any) => {
    e.preventDefault();
    router.push("/settings");
  };

  return (
    <div className={"w-full h-full flex flex-row"}>
      <nav
        className={
          "w-1/12 h-screen bg-primary grid grid-rows-3 pt-12 pr-2 pl-2"
        }
      >
        <a href={home} onClick={onHomeClick}>
          <Image src={require("../public/home.png")} alt={"Home"} />
        </a>
        <a href={add} onClick={onAddClick}>
          <Image src={require("../public/add.png")} alt={"add"} />
        </a>
        <a href={settings} onClick={onSettingsClick}>
          <Image
            src={require("../public/options.png")}
            alt={"settings"}
            className={"pr-2 pl-2"}
          />
        </a>
      </nav>
      {props.children}
    </div>
  );
}
