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
import PersonIcon from "./icons/person-icon";
import PhoneIcon from "./icons/phone-icon";
import MailIcon from "./icons/mail-icon";
import BuildingIcon from "./icons/building-icon";

const useStyle = createStyles((theme: MantineTheme) => ({
  heading: {
    marginBottom: rem(39),
  },
  headingTitle: {
    fontWeight: 700,
    fontSize: rem(24),
    lineHeight: rem(35),
    color: theme.colors.navy[5],
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
    // background: "red",
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

export default function ContactForm() {
  const { classes } = useStyle();
  return (
    <Box>
      <Grid gutter={rem(39)}>
        <Grid.Col span={12}>
          <Title className={classes.headingTitle}>Contact details</Title>
          <Text className={classes.headingText}>
            Lorem ipsum dolor sit amet consectetur adipisc.
          </Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Name"
            rightSection={<PersonIcon />}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Email"
            rightSection={<MailIcon />}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Phone"
            rightSection={<PhoneIcon />}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            classNames={{
              input: classes.input,
              label: classes.inputLabel,
              rightSection: classes.rightSection,
            }}
            label="Company"
            rightSection={<BuildingIcon />}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
