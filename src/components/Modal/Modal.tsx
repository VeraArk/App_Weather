import Button from "components/Button/Button"

import { ModalProps } from "./types"
import { Overlay, StyledModal, StyledText } from "./styles"

function Modal({ isVisible, onClose, text }: ModalProps) {
  if (isVisible) {
    return (
      <Overlay>
        <StyledModal>
          <StyledText>{text}</StyledText>
          <Button name="Close" onClick={onClose} isBlue />
        </StyledModal>
      </Overlay>
    )
  }
}

export default Modal
