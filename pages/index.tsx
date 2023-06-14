import {
  Container,
  Text,
  Box,
  Title,
  createStyles,
  MantineTheme,
  Stepper,
  rem,
} from "@mantine/core";
import MultiStepperForm from "../components/forms/multi-stepper-form";
import ContactForm from "../components/forms/contact-form";
import ServiceForm from "../components/forms/service-form";
import BudgetForm from "../components/forms/budget-form";
import SubmitForm from "../components/forms/submit-form";

const useStyle = createStyles((theme: MantineTheme) => ({
  heading: {
    marginTop: rem(50),
    marginBottom: rem(42),
    padding: rem(12),
  },
  headingTitle: {
    fontSize: rem(34),
    lineHeight: rem(46),
    fontWeight: 700,
    color: theme.colors.navy[6],
    textAlign: "center",
  },
  headingText: {
    color: theme.colors.stormGray[6],
    width: rem(556),
    marginBottom: rem(42),
    marginRight: "auto",
    textAlign: "center",
    marginLeft: "auto",
    fontWeight: 400,
    fontSize: rem(16),
    lineHeight: rem(30),
  },
  formContainer: {
    padding: `0 ${rem(46)}`,
  },
}));

export default function Home() {
  const { classes } = useStyle();
  return (
    <Container>
      <Box component="section" className={classes.heading}>
        <Title className={classes.headingTitle}>Get a project quote</Title>
        <Text className={classes.headingText}>
          Please fill the form below to receive a quote for your project. Feel
          <br />
          free to add as much detail as needed.
        </Text>
      </Box>
      <Box className={classes.formContainer}>
        <MultiStepperForm>
          <Stepper.Step
            completedIcon={1}
            step={1}
            progressIcon={1}
            state="stepCompleted"
          >
            <ContactForm />
          </Stepper.Step>
          <Stepper.Step completedIcon={2} step={2} progressIcon={2}>
            <ServiceForm />
          </Stepper.Step>
          <Stepper.Step completedIcon={3} step={3} progressIcon={3}>
            <BudgetForm />
          </Stepper.Step>
          <Stepper.Step completedIcon={4} step={4} progressIcon={4}>
            <SubmitForm />
          </Stepper.Step>
        </MultiStepperForm>
      </Box>
    </Container>
  );
}
