import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 31px;
  background-color: #2f486f9e;
  opacity: 100%;
  border-radius: 15px;
  padding: 28px;
  width: 709px;
  height: 220px;
`
export const ErrorContainer = styled.div`
  width: 241px;
  height: 69;
  color: ${colors.ERROR};
  font-size: 57px;
`

export const Info = styled.p`
  width: 315px;
  height: 22px;
  font-size: 18px;
  color: #ffffff;
`

export const ButtonControl = styled.div`
  width: 150px;
`
