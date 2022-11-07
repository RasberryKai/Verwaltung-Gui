import Image from "next/image";
import {useRouter} from "next/router";

export default function Navbar(props: any) {
    const router = useRouter();
    const home = "localhost:3000";
    const add = "localhost:3000/add";

    const onHomeClick = (e: any) => {
        e.preventDefault();
        router.push("/");
    }

    const onAddClick = (e: any) => {
        e.preventDefault();
        router.push("/add");
    }

    return (
        <div className={"w-full h-full flex flex-row"}>
            <nav className={"w-1/12 h-screen bg-secondary grid grid-rows-3"}>
                <a href={home} onClick={onHomeClick}>
                    <Image src={require("../public/home.png")} alt={"Home"} />
                </a>
                <a href={add} onClick={onAddClick}>
                    <Image src={require("../public/add.png")} alt={"add"} />
                </a>
            </nav>
            {props.children}
        </div>
    )
}