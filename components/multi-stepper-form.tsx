import {
  MantineTheme,
  Stepper,
  Group,
  Button,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { useState, ReactNode, Children } from "react";

interface MultiStepperProps {
  children: ReactNode;
}

const useStyle = createStyles((theme: MantineTheme) => ({
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
  actionButton: {
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

export default function MultiStepperForm({ children }: MultiStepperProps) {
  const [active, setActive] = useState(0);
  const childCount = Children.count(children);
  const nextStep = () =>
    setActive((current) => (current < childCount ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const { classes } = useStyle();
  console.log(active);
  return (
    <>
      <Stepper
        active={active}
        classNames={{
          root: classes.root,
          stepBody: classes.stepBody,
          stepIcon: classes.stepIcon,
          steps: classes.steps,
          separator: classes.separator,
          step: classes.step,
        }}
      >
        {children}
      </Stepper>
      <Group className={classes.actionButtonContainer} position="apart">
        {active !== 0 ? (
          <Button className={classes.actionButton} onClick={prevStep}>
            Previous Step
          </Button>
        ) : (
          // just to make sure the element stays on its pos when only one rendered
          <div style={{ width: "80px" }}></div>
        )}
        {active !== childCount - 1 ? (
          <Button className={classes.actionButton} onClick={nextStep}>
            Next Step
          </Button>
        ) : (
          // just to make sure the element stays on its pos when only one rendered
          <div style={{ width: "80px" }}></div>
        )}
      </Group>
    </>
  );
}
