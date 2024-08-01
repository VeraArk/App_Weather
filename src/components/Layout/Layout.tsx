import { useNavigate } from "react-router-dom"
import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  NavigationContainer,
} from "./styles"
import { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goHomePage}>Weather app</Logo>
        <NavigationContainer>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/weathers"
          >
            Weathers
          </Link>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
