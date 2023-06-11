import {
  MantineTheme,
  Stepper,
  Group,
  Button,
  useMantineTheme,
  Grid,
  createStyles,
  getStylesRef,
  rem,
  ColorSchemeProvider,
} from "@mantine/core";
import { useState, ReactNode, Children } from "react";

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
  },
  step: {
    ref: getStylesRef("step"),
  },
  stepBody: {
    display: "none",
  },
  separator: {
    position: "relative",
    borderRadius: theme.radius.md,
    marginRight: rem(18),
    marginLeft: rem(18),
    height: rem(6),
    backgroundColor: theme.colors.gray[2],
    [`${getStylesRef("step")}[data-progress="true"] + &::before`]: {
      content: '""',
      display: "block",
      inset: 0,
      position: "absolute",
      backgroundColor: theme.colors.red[5],
    },
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
      // right: "50%",
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

interface MultiStepperProps {
  children: ReactNode;
}

export default function MultiStepperForm({ children }: MultiStepperProps) {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const { classes } = useStyle();
  const theme = useMantineTheme();
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
          // separatorActive: classes.active,
        }}
      >
        {children}
      </Stepper>
      <Group className={classes.actionButtonContainer} position="apart">
        <Button className={classes.actionButton} onClick={prevStep}>
          Previous Step
        </Button>
        <Button className={classes.actionButton} onClick={nextStep}>
          Next Step
        </Button>
      </Group>
    </>
  );
}
