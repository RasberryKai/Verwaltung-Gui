import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { MantineProvider } from "@mantine/core";
import AlignMid from "../components/common/alignMid";

export default function App({ Component, pageProps }: AppProps) {
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
      <Navbar>
        <AlignMid>
          <Component {...pageProps} />
        </AlignMid>
      </Navbar>
    </MantineProvider>
  );
}
