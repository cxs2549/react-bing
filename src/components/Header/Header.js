import styled from 'styled-components'
import Bottombar from "./Bottombar/Bottombar"
import logo from '../../assets/b-logo.png'
import { IoIosSearch } from "react-icons/io";
const StyledHeader = styled.header`
  height: 60px;
  background-color: var(--navBGC);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
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
      <img src={logo} alt="" />
      <IoIosSearch />
      <Bottombar />
    </StyledHeader>
  )
}

export default Header
