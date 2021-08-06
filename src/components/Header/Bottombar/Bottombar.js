import styled from 'styled-components'
import Icons from "./Icons/Icons"

const StyledBottombar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--navBGC);
  color: white;
`

const Bottombar = () => {
  return (
    <StyledBottombar>
      <Icons />
    </StyledBottombar>
  )
}

export default Bottombar
