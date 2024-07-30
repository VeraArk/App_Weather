import { StyledButton } from "./styles"

import { ButtonProps } from "./types"

function Button({
  type = "button",
  name = "Send",
  onClick,
  disabled = false,
  isRed = false,
}: ButtonProps) {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {name}
    </StyledButton>
  )
}

export default Button
