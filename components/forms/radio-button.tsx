import { Box, rem } from "@mantine/core";
import React, { LegacyRef, RefObject, forwardRef } from "react";

interface RadioButtonProps extends React.ComponentProps<"input"> {
  label: string;
  icon?: React.ComponentType;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, icon: Icon, ...radioProps }: RadioButtonProps, ref) => {
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
        <input type="radio" ref={ref} {...radioProps} />
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
);

// export default function RadioButton({
//   label,
//   icon: Icon,
//   ...radioProps
// }: RadioButtonProps) {
//   return (
//     <Box
//       sx={() => ({
//         position: "relative",
//         // display: "grid",
//         // placeItems: "center",
//         display: "flex",
//         alignItems: "center",
//         paddingLeft: rem(16),
//         gap: rem(16),
//         width: "100%",
//         height: "100%",
//         borderRadius: rem(16),
//         boxShadow: "0px 2px 6px 0px rgba(19, 18, 66, 0.07)",
//       })}
//     >
//       <input type="radio" {...radioProps} />
//       <Box
//         component="label"
//         htmlFor={radioProps.id}
//         sx={(theme) => ({
//           [`input:checked + &`]: {
//             outline: `1px solid ${theme.colors.purpleBlue[5]}`,
//           },
//           display: "grid",
//           alignItems: "center",
//           position: "absolute",
//           // width: "100%",
//           // height: "100%",
//           inset: 0,
//           borderRadius: rem(16),
//           color: theme.colors.navy[5],
//           fontWeight: 500,
//           fontSize: rem(18),
//           lineHeight: rem(20),
//         })}
//       ></Box>
//       {Icon && (
//         <span>
//           <Icon />
//         </span>
//       )}
//       <span>{label}</span>
//     </Box>
//   );
// }

RadioButton.displayName = "RadioButton";

export default RadioButton;