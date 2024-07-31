import styled from "@emotion/styled"
import { colors } from "styles/colors";

interface StyledButtonProps {
  $isBlue?: boolean | undefined;
}

const getButtonColor = (
  disbled: boolean | undefined,
  isBlue: boolean | undefined
) => {
  if (disbled) {
    return "grey";
  } else if (isBlue) {
    return colors.PRIMARY_BLUE;
  } else {
    return "transparent";
  }
};


export const StyledButton = styled("button")<StyledButtonProps>`
  width: 100%;
  height: 48px;
  padding: 12px 40px;
  gap: 10px;
  color: #ffffff;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: left;
  background-color: ${({ disabled, $isBlue}) =>
    getButtonColor(disabled, $isBlue)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 50px;
  border: 1px solid #ffffff; 
`

