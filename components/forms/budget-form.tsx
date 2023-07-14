import { useContext, ChangeEventHandler, Dispatch } from "react";
import {
  Box,
  Text,
  Title,
  createStyles,
  MantineTheme,
  rem,
} from "@mantine/core";
import {
  FormContext,
  FormDispatchContext,
  type Action,
} from "../../pages/_app";
import FormLayout from "./form-layout";
import RadioButton from "./radio-button";
import type { FormProps, SubmitEventHandler } from "./types";

const budgets = [
  {
    value: "5.000",
    label: "$5.000 - $10.000",
  },
  {
    value: "10.000",
    label: "$10.000 - $20.000",
  },
  {
    value: "20.000",
    label: "$20.000 - $50.000",
  },
  {
    value: "50.000",
    label: "$50.000+",
  },
];

const useStyle = createStyles((theme: MantineTheme) => ({
  heading: {
    marginBottom: rem(39),
  },
  headingTitle: {
    fontWeight: 700,
    fontSize: rem(24),
    lineHeight: rem(35),
    color: theme.colors.navy[5],
    marginBottom: rem(8),
  },
  headingText: {
    color: theme.colors.stormGray[6],
  },
  radio: {
    appearance: "none",
    top: rem(45),
    left: rem(32),
    backgroundColor: "#fff",
    margin: 0,
    width: rem(24),
    height: rem(24),
    border: "1px solid #d9dbe9",
    borderRadius: "50%",
    transform: "translateY(-0.075em)",
    display: "grid",
    placeContent: "center",
    [`&:checked`]: {
      background: theme.colors.purpleBlue[5],
    },
    [`&::before`]: {
      content: '""',
      width: rem(8),
      height: rem(8),
      borderRadius: "50%",
      transform: "scale(0)",
      transition: "120ms transform ease-in-out",
      backgroundColor: "white",
    },
    [`&:checked::before`]: {
      transform: "scale(1)",
    },
  },
}));

export default function BudgetForm({ name }: FormProps) {
  const { classes } = useStyle();
  const dispatch = useContext(FormDispatchContext) as Dispatch<Action>;
  const state = useContext(FormContext);
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({
      type: "SET_DATA",
      payload: {
        ...state,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault;
    dispatch({ type: "NEXT_FORM" });
  };

  return (
    <Box component="form" id={name} onSubmit={submitHandler}>
      <FormLayout>
        <Box
          sx={(theme: MantineTheme) => ({
            marginTop: rem(40),
            marginBottom: rem(20),
            gridColumnEnd: "span 2",
            [theme.fn.smallerThan("sm")]: {
              gridColumnEnd: "span 1",
            },
          })}
        >
          <Title className={classes.headingTitle}>
            What’s your project budget?
          </Title>
          <Text className={classes.headingText}>
            Please select the project budget range you have in mind.
          </Text>
        </Box>
        {budgets.map((budget) => (
          <RadioButton
            name="budget"
            id={budget.value}
            key={budget.label}
            value={budget.value}
            checked={state.budget === budget.value}
            label={budget.label}
            onChange={onChangeHandler}
            className={classes.radio}
          />
        ))}
      </FormLayout>
    </Box>
  );
}
