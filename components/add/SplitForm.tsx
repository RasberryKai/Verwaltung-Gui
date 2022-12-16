import React from "react";

interface SplitFormProps {
    name: string;
    children: React.ReactNode;
    className?: string;
}

export default function SplitForm(props: SplitFormProps) {
    return (
        <div className={`w-full flex flex-row ${props.className}`}>
            <div className={"w-1/3"}>
                <p className={"text-orange text-4xl font-bold"}>{props.name}</p>
            </div>
            <div className={"w-2/3"}>{props.children}</div>
        </div>
    );
}
