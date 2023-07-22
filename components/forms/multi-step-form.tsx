import {
  createStyles,
  getStylesRef,
  MantineTheme,
  Box,
  Stepper,
  Group,
  Button,
  Title,
  Text,
  TextInput,
  Grid,
  rem,
} from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import CheckIcon from "../../public/Group37301.png";
import BuildingIcon from "../icons/building-icon";
import PersonIcon from "../icons/person-icon";
import PhoneIcon from "../icons/phone-icon";
import MailIcon from "../icons/mail-icon";
import RadioButton from "./radio-button";
import SettingIcon from "../icons/setting-icon";
import DesignIcon from "../icons/design-icon";
import MarketingIcon from "../icons/marketing-icon";
import DevelopmentIcon from "../icons/development-icon";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: "Development" | "Design" | "Marketing" | "Other";
  budget: "5000" | "10000" | "20000" | "50000";
}

const fields = [
  {
    name: "name",
    icon: PersonIcon,
    validations: {
      required: "Name is required",
    },
  },
  {
    name: "email",
    icon: MailIcon,
    validations: {
      required: "Email is required",
      pattern: {
        value: /^[\w.+\-]+@gmail\.com$/,
        message: "Email is invalid",
      },
    },
  },
  {
    name: "phone",
    icon: PhoneIcon,
    validations: {
      required: "Phone is required",
      pattern: {
        value: /^(08)[1-9][0-9]\d{6,9}$/,
        message: "Phone is invalid",
      },
    },
  },
  {
    name: "company",
    icon: BuildingIcon,
    validations: {
      required: "Company is required",
    },
  },
];

const services = [
  { name: "Development", icon: DevelopmentIcon },
  { name: "Design", icon: DesignIcon },
  { name: "Marketing", icon: MarketingIcon },
  { name: "Other", icon: SettingIcon },
];

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

export default function MultiStepForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { classes, cx } = useStyle();
  const [active, setActive] = useState(0);
  const nextStep = () => {
    setActive((prev) => prev + 1);
  };
  const prevStep = () => {
    setActive((active) => active - 1);
  };
  const submitHandler: SubmitHandler<FormData> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <Box component="form" onSubmit={handleSubmit(submitHandler)}>
      <Stepper
        active={active}
        breakpoint={"md"}
        classNames={{
          root: classes.stepperRoot,
          stepBody: classes.stepperStepBody,
          stepIcon: classes.stepperStepIcon,
          steps: classes.stepperSteps,
          separator: classes.stepperSeparator,
          step: classes.stepperStep,
        }}
      >
        <Stepper.Step completedIcon={1} step={1} progressIcon={1}>
          <Box className={classes.formFields}>
            <Box className={classes.formHeader}>
              <Title className={classes.headerTitle}>Contact details</Title>
              <Text className={classes.headerText}>
                Lorem ipsum dolor sit amet consectetur adipisc.
              </Text>
            </Box>
            <Grid gutter={28}>
              {fields.map(({ name, icon: Icon, validations }) => (
                <Grid.Col sx={{ height: rem(130) }} key={name} xs={12} md={6}>
                  <Box
                    className={cx({
                      [classes.error]: errors[name as keyof FormData],
                    })}
                  >
                    <TextInput
                      id={name}
                      classNames={{
                        input: errors[name as keyof FormData]
                          ? classes.inputError
                          : classes.input,
                        label: classes.inputLabel,
                        rightSection: classes.rightSection,
                      }}
                      label={toTitleCase(name)}
                      placeholder={toTitleCase(name)}
                      rightSection={<Icon />}
                      {...register(name as keyof FormData, { ...validations })}
                    />
                    {errors[name as keyof FormData]?.message}
                  </Box>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stepper.Step>
        <Stepper.Step completedIcon={2} step={2} progressIcon={2}>
          <Box className={classes.formFields}>
            <Box className={classes.formHeader}>
              <Title className={classes.headerTitle}>Our Services</Title>
              <Text className={classes.headerText}>
                Please select which service you are interested in.
              </Text>
            </Box>
            <Grid gutter={28}>
              {services.map((service) => (
                <Grid.Col
                  sx={{ height: rem(130) }}
                  key={service.name}
                  xs={12}
                  md={6}
                >
                  <RadioButton
                    id={service.name}
                    key={service.name}
                    value={service.name}
                    label={service.name}
                    icon={service.icon}
                    className={classes.iconRadio}
                    {...register("service")}
                    defaultChecked={service.name === "Development"}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stepper.Step>
        <Stepper.Step completedIcon={3} step={3} progressIcon={3}>
          <Box className={classes.formFields}>
            <Box className={classes.formHeader}>
              <Title className={classes.headerTitle}>
                What’s your project budget?
              </Title>
              <Text className={classes.headerText}>
                Please select the project budget range you have in mind.
              </Text>
            </Box>
            <Grid gutter={28}>
              {budgets.map((budget) => (
                <Grid.Col
                  sx={{ height: rem(130) }}
                  key={budget.label}
                  xs={12}
                  md={6}
                >
                  <RadioButton
                    id={budget.value}
                    key={budget.label}
                    value={budget.value}
                    label={budget.label}
                    className={classes.radio}
                    {...register("budget")}
                    defaultChecked={budget.value === "50.000"}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stepper.Step>
        <Stepper.Step completedIcon={4} step={4} progressIcon={4}>
          <Box className={classes.formFields}>
            <Image
              style={{
                display: "block",
                margin: `${rem(20)} auto ${rem(18)} auto`,
              }}
              src={CheckIcon}
              alt=""
            ></Image>
            <Box sx={{ width: "max-content", margin: "0 auto" }}>
              <Title
                sx={{ textAlign: "center" }}
                className={classes.headerTitle}
              >
                Submit your quote request
              </Title>
              <Text sx={{ textAlign: "center" }} className={classes.headerText}>
                Please review all the information you previously typed in
                <br />
                the past steps, and if all is okay, submit your message to
                <br />
                receive a project quote in 24 - 48 hours.
              </Text>
            </Box>
            <Button type="submit" className={classes.submitButton}>
              Submit
            </Button>
          </Box>
        </Stepper.Step>
      </Stepper>
      <Group className={classes.buttonContainer} position="apart">
        {active !== 0 ? (
          <Button
            variant="outline"
            className={classes.prevButton}
            onClick={prevStep}
          >
            Previous Step
          </Button>
        ) : (
          // ensure the element stays on its pos when only one rendered
          <div style={{ width: "80px" }}></div>
        )}
        {active !== 3 ? (
          <Button
            className={classes.nextButton}
            onClick={active === 0 ? handleSubmit(nextStep) : nextStep}
          >
            Next Step
          </Button>
        ) : (
          // ensure the element stays on its pos when only one rendered
          <div style={{ width: "80px" }}></div>
        )}
      </Group>
    </Box>
  );
}

const useStyle = createStyles((theme: MantineTheme) => ({
  formHeader: {
    paddingTop: rem(64),
    paddingBottom: rem(39),
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: rem(24),
    lineHeight: rem(35),
    color: theme.colors.navy[5],
    marginBottom: rem(8),
  },
  headerText: {
    color: theme.colors.stormGray[6],
  },
  formFields: {
    // height: rem(328),
  },
  heading: {
    marginTop: rem(50),
    marginBottom: rem(42),
  },
  stepperRoot: {
    padding: `${rem(32)} ${rem(46)} ${rem(80)} ${rem(46)}`,
    margin: "0 auto",
    border: "1px solid #EFF0F7",
    borderRadius: rem(34),
    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  stepperSteps: {
    padding: rem(32),
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    [`& > .${getStylesRef("step")}[data-progress="true"] + .${getStylesRef(
      "sep"
    )}::before`]: {
      content: `""`,
      display: "block",
      position: "absolute",
      borderRadius: theme.radius.lg,
      width: "50%",
      inset: 0,
      backgroundColor: theme.colors.purpleBlue[5],
    },
  },
  stepperStep: {
    ref: getStylesRef("step"),
  },
  stepperStepBody: {
    display: "none",
  },
  stepperSeparator: {
    position: "relative",
    ref: getStylesRef("sep"),
    borderRadius: theme.radius.md,
    marginRight: rem(18),
    marginLeft: rem(18),
    height: rem(6),
  },
  stepperStepIcon: {
    '&[data-progress="true"]': {
      backgroundColor: theme.colors.purpleBlue[5],
      color: "white",
    },
    color: theme.colors.stormGray[6],
  },
  stepperActive: {
    position: "relative",
    backgroundColor: theme.colors.gray[2],
    "&::before": {
      content: `""`,
      display: "block",
      position: "absolute",
      borderRadius: theme.radius.lg,
      width: "50%",
      inset: 0,
      backgroundColor: theme.colors.purpleBlue[5],
    },
  },
  stepperCompleted: {
    backgroundColor: theme.colors.purpleBlue[5],
  },
  nextButton: {
    borderRadius: theme.radius.xl,
    width: rem(165),
    height: rem(61),
  },
  prevButton: {
    borderRadius: theme.radius.xl,
    width: rem(165),
    height: rem(61),
  },
  submitButton: {
    display: "block",
    borderRadius: theme.radius.xl,
    width: rem(165),
    height: rem(61),
    marginTop: rem(16),
    marginRight: "auto",
    marginLeft: "auto",
  },
  buttonContainer: {
    width: rem(698),
    margin: "0 auto",
    padding: `${rem(32)} 0`,
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  iconRadio: {
    display: "none",
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

const toTitleCase: (str: string) => string = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};
