import {
  MantineTheme,
  Box,
  Text,
  Title,
  Button,
  rem,
  createStyles,
} from "@mantine/core";
import Image from "next/image";
import CheckLogo from "../../public/Group37301.png";

const useStyle = createStyles((theme: MantineTheme) => ({
  button: {
    display: "block",
    borderRadius: theme.radius.xl,
    width: rem(165),
    height: rem(61),
    marginTop: rem(16),
    marginRight: "auto",
    marginLeft: "auto",
  },
  headingTitle: {
    fontWeight: 700,
    fontSize: rem(24),
    lineHeight: rem(35),
    color: theme.colors.navy[5],
    marginBottom: rem(8),
    marginTop: rem(18),
    textAlign: "center",
  },
  headingText: {
    width: rem(495),
    margin: "0 auto",
    color: theme.colors.stormGray[6],
    textAlign: "center",
  },
}));

export default function SubmitForm() {
  const { classes } = useStyle();
  return (
    <Box
      component="form"
      sx={() => ({
        minHeight: 412,
      })}
    >
      <Image
        style={{ display: "block", margin: `${rem(20)} auto ${rem(18)} auto` }}
        src={CheckLogo}
        alt=""
      ></Image>
      <Title className={classes.headingTitle}>Submit your quote request</Title>
      <Text className={classes.headingText}>
        Please review all the information you previously typed in
        <br />
        the past steps, and if all is okay, submit your message to
        <br />
        receive a project quote in 24 - 48 hours.
      </Text>
      <Button className={classes.button}>Submit</Button>
    </Box>
  );
}