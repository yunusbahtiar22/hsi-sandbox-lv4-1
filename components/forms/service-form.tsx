import {
  Box,
  Text,
  Title,
  createStyles,
  rem,
  MantineTheme,
  // getStylesRef,
} from "@mantine/core";
import RadioButton from "./radio-button";
import FormLayout from "./form-layout";
import SettingIcon from "../icons/setting-icon";
import DesignIcon from "../icons/design-icon";
import MarketingIcon from "../icons/marketing-icon";
import DevelopmentIcon from "../icons/development-icon";
import { ChangeEventHandler, useContext } from "react";
import { FormContext, FormDispatchContext } from "../../pages/_app";

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

export default function ServiceForm(): JSX.Element {
  const { classes } = useStyle();
  const dispatch = useContext(FormDispatchContext);
  const state = useContext(FormContext);
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch !== null &&
      dispatch({
        payload: {
          ...state,
          [e.target.name]: e.target.value,
        },
      });
  };
  return (
    <Box component="form">
      <FormLayout>
        <Box
          sx={() => ({
            marginTop: rem(40),
            marginBottom: rem(20),
            gridColumnEnd: "span 2",
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
