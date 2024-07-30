import { StyledButton, ButtonImg } from "./styles";

import { ButtonProps } from "./types";

function Button({
  imgSrc = undefined,
  type = "button",
  name = "Send",
  onClick,
  disabled = false,
  isRed = false
}: ButtonProps) {
  return (
    <StyledButton $isRed={isRed} disabled={disabled} onClick={onClick} type={type}>
      {imgSrc && <ButtonImg src={imgSrc} />}
      {!imgSrc && name}
    </StyledButton>
  );
}

export default Button;