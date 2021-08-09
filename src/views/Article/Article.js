import styled from 'styled-components'
import Searchbar from "../Home/Inner/Searchbar/Searchbar"
import Source from "./Source/Source"
import Story from "./Story/Story"

const StyledArticle = styled.div`
  background-color: #343434;
  padding-top: .75rem;
`

const Article = () => {
  return (
    <StyledArticle>
      <Searchbar noweather />
      <Source />
      <Story />
    </StyledArticle>
  )
}

export default Article
