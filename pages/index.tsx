import {
  Container,
  Text,
  Box,
  Group,
  Button,
  Title,
  createStyles,
  getStylesRef,
  MantineTheme,
  Stepper,
  rem,
} from "@mantine/core";
import ContactForm from "../components/forms/contact-form";
import ServiceForm from "../components/forms/service-form";
import BudgetForm from "../components/forms/budget-form";
import SubmitForm from "../components/forms/submit-form";
import { useState, useContext } from "react";
import { FormContext, FormDispatchContext } from "./_app";

const useStyle = createStyles((theme: MantineTheme) => ({
  heading: {
    marginTop: rem(50),
    marginBottom: rem(42),
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
  root: {
    padding: rem(32),
    width: rem(698),
    margin: "0 auto",
    border: "1px solid #EFF0F7",
    borderRadius: rem(34),
    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
  },
  steps: {
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
  step: {
    ref: getStylesRef("step"),
  },
  stepBody: {
    display: "none",
  },
  separator: {
    position: "relative",
    ref: getStylesRef("sep"),
    borderRadius: theme.radius.md,
    marginRight: rem(18),
    marginLeft: rem(18),
    height: rem(6),
  },
  stepIcon: {
    '&[data-progress="true"]': {
      backgroundColor: theme.colors.purpleBlue[5],
      color: "white",
    },
  },
  active: {
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
  completed: {
    backgroundColor: theme.colors.purpleBlue[5],
  },
  content: {
    padding: `${rem(64)} ${rem(32)}`,
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
  actionButtonContainer: {
    width: rem(698),
    margin: "0 auto",
    padding: `${rem(32)} 0`,
  },
}));

export default function Home() {
  const { classes } = useStyle();
  const { currentForm } = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);
  const forms = [
    {
      idx: 1,
      name: "contactForm",
      form: ContactForm,
    },
    {
      idx: 2,
      name: "serviceForm",
      form: ServiceForm,
    },
    {
      idx: 3,
      name: "budgetForm",
      form: BudgetForm,
    },
    {
      idx: 4,
      name: "submitForm",
      form: SubmitForm,
    },
  ];
  const formCount = forms.length;
  const currentFormName = forms[currentForm].name;
  const prevStep = () => {
    if (dispatch !== null && currentForm > 0) {
      dispatch({ type: "PREV_FORM" });
    }
  };
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
        <Stepper
          active={currentForm}
          breakpoint={"md"}
          classNames={{
            root: classes.root,
            stepBody: classes.stepBody,
            stepIcon: classes.stepIcon,
            steps: classes.steps,
            separator: classes.separator,
            step: classes.step,
          }}
        >
          {forms.map(({ form: Form, idx, name }) => (
            <Stepper.Step
              completedIcon={idx}
              step={idx}
              progressIcon={idx}
              key={name}
            >
              <Form name={name} />
            </Stepper.Step>
          ))}
        </Stepper>
        <Group className={classes.actionButtonContainer} position="apart">
          {currentForm !== 0 ? (
            <Button
              variant="outline"
              className={classes.prevButton}
              onClick={prevStep}
            >
              Previous Step
            </Button>
          ) : (
            // just to make sure the element stays on its pos when only one rendered
            <div style={{ width: "80px" }}></div>
          )}
          {currentForm !== formCount - 1 ? (
            <Button
              className={classes.nextButton}
              type="submit"
              form={currentFormName}
            >
              Next Step
            </Button>
          ) : (
            // just to make sure the element stays on its pos when only one rendered
            <div style={{ width: "80px" }}></div>
          )}
        </Group>
      </Box>
    </Container>
  );
}
