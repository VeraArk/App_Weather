import Button from "../Button/Button"
import { ButtonControl, ErrorContainer, Info, StyledCard } from "./styles"

import { errorCardProps } from "./types"

function ErrorCard(props: errorCardProps) {
  return (
    <StyledCard>
      <ErrorContainer>ERROR</ErrorContainer>
      <Info>{props.errorMessage}</Info>
      <ButtonControl>
        <Button onClick={props.onDelete} name="Delete" />
      </ButtonControl>
    </StyledCard>
  )
}

export default ErrorCard
