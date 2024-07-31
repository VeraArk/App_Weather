import styled from "@emotion/styled"

import backgroundImage from "assets/backgroundImage.jpg"

export const HomepageWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export const StyledFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 710px;
  height: 48px;
  margin-top: 200px;
  left: 605px;
  gap: 14px;
`
export const ButtonControl = styled.div`
  width: 155px;
`
