import { Box, MantineTheme, createStyles, rem } from "@mantine/core";
import { ReactNode } from "react";

interface FormLayoutProps {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const useStyle = createStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(284px, 1fr))",
    gridTemplateRows: "150px repeat(2, 120px)",
    columnGap: rem(28),
    rowGap: rem(21),
    [theme.fn.smallerThan("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "150px repeat(4, 120px)",
    },
  },
}));

export default function FormLayout(props: FormLayoutProps) {
  const { classes } = useStyle();
  return <Box className={classes.grid}>{props.children}</Box>;
}
