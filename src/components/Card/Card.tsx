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
          <Temp>18°</Temp>
          <City>Frankfurt</City>
        </TempCityContainer>
        <ImgControl>
          <Img
            src="https://openweathermap.org/img/w/$%7BweatherData.weather[0].icon%7D.png"
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
