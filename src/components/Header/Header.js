import styled from 'styled-components'
import Bottombar from "./Bottombar/Bottombar"
import Topbar from "./Topbar/Topbar";
const StyledHeader = styled.header`
  height: 60px;
  color: white;
  position: fixed;
  z-index: 10;
  img {
    max-width: 24px;
  }
  svg {
    font-size: var(--svgSize);
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Topbar />
      <Bottombar />
    </StyledHeader>
  )
}

export default Header
