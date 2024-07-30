import styled from "@emotion/styled";
import { NavLink, Link as SimpleLink } from "react-router-dom";



export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: Fixed (1,920px) px;
  height: Fixed (80px) px;
  padding: 10px 0px 0px 0px;
  gap: 10px;
  border: 0px 0px 1px 0px;
  opacity: 0px;
  background: linear-gradient(
      0deg,
      rgba(18, 45, 77, 0.5),
      rgba(18, 45, 77, 0.5)
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  border-bottom: 1px solid #d2d2d2;
`;

export const Logo = styled.div`
    width: 155px;
  height: 29px;
  top: 25.5px;
  left: 85px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2 px;
  font: Inter;
  color: #FFFFFF;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;



