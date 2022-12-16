import { InfinitySpin } from "react-loader-spinner";

export default function InfinityLoad() {
    return (
        <div className={"w-full h-full flex flex-row justify-center items-center"}>
            <InfinitySpin color={"#e27536"} />
        </div>
    );
}
