export default function CircleLoad() {
    return (
        <div className={"flex justify-center items-center w-full h-full"}>
            <Oval
                width={"200"}
                height={"200"}
                color="#e27536"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#d55e17"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
}

import { Oval } from "react-loader-spinner";
