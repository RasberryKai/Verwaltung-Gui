import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { MantineProvider } from "@mantine/core";
import AlignMid from "../components/common/AlignMid";
import { useEffect } from "react";
import { NotificationsProvider } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <MantineProvider
            theme={{
                colorScheme: "dark",
                fontFamily: "Inter, sans-serif",
                colors: {
                    orange: [
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                        "#ce6d35",
                    ],
                },
                primaryColor: "orange",
            }}
        >
            <NotificationsProvider>
                <Navbar>
                    <AlignMid>
                        <Component {...pageProps} />
                    </AlignMid>
                </Navbar>
            </NotificationsProvider>
        </MantineProvider>
    );
}
