import { StyledButton } from "./styles"

import { ButtonProps } from "./types"


function Button({
  type = "button",
  name = "Send",
  onClick,
  disabled = false,
  isBlue = false
}: ButtonProps) {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type} $isBlue={isBlue}>
      {name}
    </StyledButton>
  )
}

export default Button
