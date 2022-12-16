import { ThreeCircles } from "react-loader-spinner";

export default function FancyCircleLoad() {
    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <ThreeCircles
                height="200"
                width="200"
                color="#e27536"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
}
