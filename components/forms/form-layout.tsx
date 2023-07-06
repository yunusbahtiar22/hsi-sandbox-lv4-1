import { Box, rem } from "@mantine/core";
import { ReactNode } from "react";

interface FormLayoutProps {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

export default function FormLayout(props: FormLayoutProps) {
  return (
    <Box
      sx={() => ({
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(284px, 1fr))",
        gridTemplateRows: "150px repeat(2, 120px)",
        columnGap: rem(28),
        rowGap: rem(21),
      })}
    >
      {props.children}
    </Box>
  );
}
