import styled from "@emotion/styled"
import backgroundImage from "assets/backgroundImage.jpg"

export const PageWrapperWheather = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`
export const WheatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 220px;
  gap: 40 px;
`
export const ButtonControl = styled.div`
  width: 709px;
`
