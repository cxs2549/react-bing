import styled from "styled-components";
import Item from "./Item/Item";
import {articles as master} from '../../../../../data/articles'


const StyledItems = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0 0.75rem;
  padding-bottom: 2rem;
`;

const Items = () => {
  const items = master.slice(5, 8)
  return (
    <StyledItems>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </StyledItems>
  );
};

export default Items;
