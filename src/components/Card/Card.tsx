import Button from "../Button/Button"
import {
  ButtonContainer,
  ButtonControl,
  City,
  Img,
  ImgControl,
  Temp,
  TempCityContainer,
  StyledCard,
  TempCityImgContainer,
} from "./styles"
import { CardProps } from "./types"

function Card(props: CardProps) {
  return (
    <StyledCard>
      <TempCityImgContainer>
        <TempCityContainer>
          <Temp>{props.temperature}</Temp>
          <City>{props.city}</City>
        </TempCityContainer>
        <ImgControl>
          <Img
            src={props.imgUrl}
            alt="Weather image"
          />
        </ImgControl>
      </TempCityImgContainer>
      <ButtonContainer>
        {props.showSaveButton && (
          <ButtonControl>
            <Button name="Save" />
          </ButtonControl>
        )}
        <ButtonControl>
          <Button name="Delete" />
        </ButtonControl>
      </ButtonContainer>
    </StyledCard>
  )
}

export default Card
