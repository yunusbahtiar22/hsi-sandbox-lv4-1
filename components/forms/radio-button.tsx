import { Box, rem } from "@mantine/core";

interface RadioButtonProps
  extends Partial<
    Pick<HTMLInputElement, "checked" | "value" | "name" | "id" | "className">
  > {
  label: string;
  icon?: React.ComponentType;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function RadioButton({
  label,
  icon: Icon,
  ...radioProps
}: RadioButtonProps) {
  return (
    <Box
      sx={() => ({
        position: "relative",
        // display: "grid",
        // placeItems: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: rem(16),
        gap: rem(16),
        width: "100%",
        height: "100%",
        borderRadius: rem(16),
        boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)",
      })}
    >
      <input type="radio" {...radioProps} />
      <Box
        component="label"
        htmlFor={radioProps.id}
        sx={(theme) => ({
          [`input:checked + &`]: {
            outline: `1px solid ${theme.colors.purpleBlue[5]}`,
          },
          display: "grid",
          alignItems: "center",
          position: "absolute",
          // width: "100%",
          // height: "100%",
          inset: 0,
          borderRadius: rem(16),
          color: theme.colors.navy[5],
          fontWeight: 500,
          fontSize: rem(18),
          lineHeight: rem(20),
        })}
      ></Box>
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      <span>{label}</span>
    </Box>
  );
}
