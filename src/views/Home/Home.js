import styled from 'styled-components'
import hero from '../../assets/hero.jpg'
import Inner from "./Inner/Inner"
const StyledHome = styled.div`
  background-color: red;
  background-image: url(${hero});
  background-position: center center;
  background-size: cover;
  max-height: 100vh;
  overflow-y: hidden;
`

const Home = () => {
  
  return (
    <StyledHome>
      <Inner />
    </StyledHome>
  )
}

export default Home
