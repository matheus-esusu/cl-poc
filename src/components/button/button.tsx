import {
  Button as MuiButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

export type ButtonProps = MUIButtonProps;

function Button(props: ButtonProps) {
  return <MuiButton {...props} />;
}

export default Button;
