import {
  Box,
  Text,
  Title,
  createStyles,
  rem,
  MantineTheme,
} from "@mantine/core";
import RadioButton from "./radio-button";
import FormLayout from "./form-layout";
import SettingIcon from "../icons/setting-icon";
import DesignIcon from "../icons/design-icon";
import MarketingIcon from "../icons/marketing-icon";
import DevelopmentIcon from "../icons/development-icon";
import { ChangeEventHandler, Dispatch, useContext } from "react";
import {
  type Action,
  FormContext,
  FormDispatchContext,
} from "../../pages/_app";
import { FormProps, SubmitEventHandler } from "./types";

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
    display: "none",
  },
}));

const services = [
  { name: "Development", icon: DevelopmentIcon },
  { name: "Design", icon: DesignIcon },
  { name: "Marketing", icon: MarketingIcon },
  { name: "Other", icon: SettingIcon },
];

export default function ServiceForm({ name }: FormProps): JSX.Element {
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
          <Title className={classes.headingTitle}>Contact details</Title>
          <Text className={classes.headingText}>
            Lorem ipsum dolor sit amet consectetur adipisc.
          </Text>
        </Box>
        {services.map((service) => (
          <RadioButton
            name="service"
            id={service.name}
            key={service.name}
            value={service.name}
            checked={state.service === service.name}
            onChange={onChangeHandler}
            label={service.name}
            icon={service.icon}
            className={classes.radio}
          />
        ))}
      </FormLayout>
    </Box>
  );
}
