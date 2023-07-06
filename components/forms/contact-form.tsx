import {
  Box,
  Grid,
  Text,
  Title,
  TextInput,
  createStyles,
  MantineTheme,
  rem,
} from "@mantine/core";
import BuildingIcon from "../icons/building-icon";
import PersonIcon from "../icons/person-icon";
import PhoneIcon from "../icons/phone-icon";
import MailIcon from "../icons/mail-icon";
import FormLayout from "./form-layout";
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
  input: {
    display: "block",
    padding: `${rem(24)} ${rem(60)} ${rem(24)} ${rem(24)}`,
    borderRadius: rem(34),
  },
  rightSection: {
    right: rem(15),
  },
  inputLabel: {
    fontSize: rem(18),
    fontWeight: 500,
    color: theme.colors.navy[2],
    lineHeight: rem(20),
    marginBottom: rem(20),
  },
}));

export default function ContactForm(): JSX.Element {
  const { classes } = useStyle();
  const state = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch !== null &&
      dispatch?.({
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
        <TextInput
          classNames={{
            input: classes.input,
            label: classes.inputLabel,
            rightSection: classes.rightSection,
          }}
          label="Name"
          name="name"
          value={state.name}
          onChange={onChange}
          rightSection={<PersonIcon />}
        />
        <TextInput
          classNames={{
            input: classes.input,
            label: classes.inputLabel,
            rightSection: classes.rightSection,
          }}
          label="Email"
          name="email"
          value={state.email}
          onChange={onChange}
          rightSection={<MailIcon />}
        />
        <TextInput
          classNames={{
            input: classes.input,
            label: classes.inputLabel,
            rightSection: classes.rightSection,
          }}
          label="Phone"
          name="phone"
          value={state.phone}
          onChange={onChange}
          rightSection={<PhoneIcon />}
        />
        <TextInput
          classNames={{
            input: classes.input,
            label: classes.inputLabel,
            rightSection: classes.rightSection,
          }}
          label="Company"
          name="company"
          value={state.company}
          onChange={onChange}
          rightSection={<BuildingIcon />}
        />
      </FormLayout>
    </Box>
  );
}
