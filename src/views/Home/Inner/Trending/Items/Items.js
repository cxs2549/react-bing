import styled from "styled-components";
import Item from "./Item/Item";
import {articles as master} from '../../../../../data/articles'
import Article from "../../Articles/Article/Article";


const StyledItems = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0 0.75rem;
`;

const Items = () => {
  const items = master.slice(5, 8)
  return (
    <StyledItems>
      {items.map((item, i) => (
        // 
        <Article article={item} key={i} transparent />
      ))}
    </StyledItems>
  );
};

export default Items;
