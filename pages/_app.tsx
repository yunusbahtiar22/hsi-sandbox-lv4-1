import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "DM Sans, sans-serif",
          colors: {
            navy: [
              "#44405B",
              "#3C3856",
              "#342F52",
              "#2C274E",
              "#251F4C",
              "#1E174A",
              "#170F49",
              "#18133C",
              "#191533",
              "#18152B",
            ],
            stormGray: [
              "#DEDEE0",
              "#C9C8CD",
              "#B5B4BD",
              "#A2A1AE",
              "#918FA2",
              "#807D98",
              "#6F6C90",
              "#67647E",
              "#5E5D6F",
              "#565563",
            ],
            purpleBlue: [
              "#FBFBFD",
              "#DCDBF0",
              "#BCB8E8",
              "#9A93E7",
              "#756AEE",
              "#4A3AFF",
              "#4032E8",
              "#3B2ED0",
              "#4138AD",
              "#433D91",
            ],
          },
          primaryColor: "purpleBlue",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
