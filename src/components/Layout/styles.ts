import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

import backgroundImage from "assets/backgroundImage.jpg"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  gap: 10px;
  border: 0px 0px 1px 0px;
  background: linear-gradient(
      0deg,
      rgba(18, 45, 77, 0.5),
      rgba(18, 45, 77, 0.5)
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  border-bottom: 1px solid #d2d2d2;
`

export const Logo = styled.div`
  width: 155px;
  height: 29px;
  margin-left: 85px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  color: #ffffff;
  cursor: pointer;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  margin-right: 85px;
`

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  font: Inter;
  color: #ffffff;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
`
