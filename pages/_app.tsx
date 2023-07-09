import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Dispatch, useReducer } from "react";
import { createContext } from "react";

type Action = { payload?: AppState; type: string };
type FormReducerType = (state: AppState, action: Action) => AppState;
type Service = "Development" | "Design" | "Other" | "Marketing";
type Budget = "5000" | "10.000" | "20.000" | "50.000";
interface AppState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: Service;
  budget: Budget;
  currentForm: number;
}

const formReducer: FormReducerType = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "NEXT_FORM":
      return {
        ...state,
        currentForm: state.currentForm + 1,
      };
    case "PREV_FORM":
      return {
        ...state,
        currentForm: state.currentForm - 1,
      };
    default:
      return state;
  }
};

const initialState: AppState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "Development",
  budget: "50.000",
  currentForm: 0,
};

export const FormContext = createContext<AppState>(initialState);
export const FormDispatchContext = createContext<Dispatch<Action> | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(formReducer, initialState);
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
            sugarGrape: [
              "#E7DAF3",
              "#BA89EB",
              "#962DFF",
              "#7221C3",
              "#572B82",
              "#422A59",
              "#32253F",
              "#261F2D",
              "#1D1921",
            ],
          },
          primaryColor: "purpleBlue",
        }}
      >
        <FormContext.Provider value={state}>
          <FormDispatchContext.Provider value={dispatch}>
            <Component {...pageProps} />
          </FormDispatchContext.Provider>
        </FormContext.Provider>
      </MantineProvider>
    </>
  );
}