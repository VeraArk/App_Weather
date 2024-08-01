export interface CardProps {
  showSaveButton: boolean
  city: string | undefined
  temperature: string | undefined
  imgUrl: string | undefined
  onSave?: () => void
  onDelete?: () => void
}
