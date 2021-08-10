import styled from "styled-components";
import Article from "./Article/Article";
import {articles as master} from '../../../../data/articles'

const StyledArticles = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: column;
  background-color: ${(props) => props.bg || "transparent"};
  > div:last-of-type {
    margin-bottom: 0;
  }
`;

const Articles = ({ bg, articles }) => {

  return (
    <StyledArticles bg={bg}>
      {articles.map((article, i) => (
        <Article article={article} key={i} />
      ))}
    </StyledArticles>
  );
};

export default Articles;
