import {
  Box,
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
import { useContext } from "react";
import { FormContext, FormDispatchContext } from "../../pages/_app";
import { FormProps } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";

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
    marginBottom: rem(12),
  },
  inputError: {
    display: "block",
    padding: `${rem(24)} ${rem(60)} ${rem(24)} ${rem(24)}`,
    borderRadius: rem(34),
    marginBottom: rem(12),
    border: `1px solid ${theme.colors.sugarGrape[2]}`,
    [`&:focus`]: {
      border: `1px solid ${theme.colors.sugarGrape[2]}`,
    },
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
  error: {
    [`& label`]: {
      color: theme.colors.sugarGrape[2],
    },
    color: theme.colors.sugarGrape[2],
  },
}));

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export default function ContactForm({ name }: FormProps): JSX.Element {
  const { classes, cx } = useStyle();
  const state = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);
  
  const submitHandler: SubmitHandler<ContactFormData> = (data) => {
    if (dispatch !== null) {
      dispatch({
        type: "SET_DATA",
        payload: {
          ...state,
          ...data,
        },
      });
      dispatch({ type: "NEXT_FORM" });
    }
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: state.name,
      email: state.email,
      phone: state.phone,
      company: state.company,
    },
  });

  return (
    <Box component="form" id={name} onSubmit={handleSubmit(submitHandler)}>
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
        <Box className={cx({ [classes.error]: errors.name })}>
          <TextInput
            classNames={{
              input: errors.name ? classes.inputError : classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Name"
            placeholder="Name"
            rightSection={<PersonIcon />}
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name?.message}
        </Box>
        <Box className={cx({ [classes.error]: errors.email })}>
          <TextInput
            classNames={{
              input: errors.email ? classes.inputError : classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Email"
            placeholder="Email"
            rightSection={<MailIcon />}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w.+\-]+@gmail\.com$/,
                message: "Email is invalid",
              },
            })}
          />
          {errors.email?.message}
        </Box>
        <Box className={cx({ [classes.error]: errors.phone })}>
          <TextInput
            classNames={{
              input: errors.phone ? classes.inputError : classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Phone"
            placeholder="Phone"
            rightSection={<PhoneIcon />}
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^(08)[1-9][0-9]\d{6,9}$/,
                message: "Phone number is invalid",
              },
            })}
          />
          {errors.phone?.message}
        </Box>
        <Box className={cx({ [classes.error]: errors.company })}>
          <TextInput
            classNames={{
              input: errors.company ? classes.inputError : classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Company"
            placeholder="Company"
            rightSection={<BuildingIcon />}
            {...register("company", { required: "Company is required" })}
          />
          {errors.company?.message}
        </Box>
      </FormLayout>
    </Box>
  );
}
