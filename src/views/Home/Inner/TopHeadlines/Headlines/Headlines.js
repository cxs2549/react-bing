import styled from "styled-components";
import Headline from "./Headline/Headline";
import {articles as master} from '../../../../../data/articles'

const StyledHeadlines = styled.div`
  /* border: 2px solid white; */
  overflow: hidden;
  border-radius: 8px;
  background-color: #3434348a;
  > div:last-of-type {
    border-bottom: none;
  }
`;

const Headlines = () => {
  const headlines = master.slice(3, 5)
  return (
    <StyledHeadlines>
      {headlines.map((headline, i) => (
        <Headline key={i} headline={headline} />
      ))}
    </StyledHeadlines>
  );
};

export default Headlines;
