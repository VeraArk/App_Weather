import { ReactElement } from "react"

export interface ModalProps {
  isVisible: boolean
  onClose: () => void
  text: string
}
