import {
  Container,
  Text,
  Box,
  Title,
  createStyles,
  getStylesRef,
  MantineTheme,
  rem,
} from "@mantine/core";
import MultiStepForm from "../components/forms/multi-step-form";

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
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  formContainer: {
    padding: `0 ${rem(46)}`,
    [theme.fn.smallerThan("sm")]: {
      padding: 0,
      overflow: "hidden",
    },
  },
  root: {
    padding: rem(32),
    margin: "0 auto",
    border: "1px solid #EFF0F7",
    borderRadius: rem(34),
    boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
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
    color: theme.colors.stormGray[6],
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
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
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
      <MultiStepForm />
    </Container>
  );
}
