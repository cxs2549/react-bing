import styled from "styled-components";
import Item from "./Item/Item";
import fauci from "../../../../../assets/trending/fauci.jpg";
import costner from "../../../../../assets/trending/costner.jpg";
import gavin from "../../../../../assets/trending/gavin.jpg";

const StyledItems = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0 .75rem;
  padding-bottom: 2rem;
  
`;

const Items = () => {
  const items = [
    {
      image: fauci,
      source: "USA Today",
      publishedAt: "3 hours",
      title:
        "Fauci: Expect 'a flood' of COVID vaccine mandates after FDA gives full...",
      likes: 820,
      comments: null,
    },
    {
      image: costner,
      source: "Country Living",
      publishedAt: "3 hours",
      title:
        "Kevin Costner Reacts to News About Faith Hill, Tim McGraw, and Sam...",
      likes: 111,
      comments: 4,
    },
    {
      image: gavin,
      source: "The Hill",
      publishedAt: "2 hours",
      title:
        "California GOP votes not to endorse in coming Newsom recall election",
      likes: 297,
      comments: 54,
    },
  ];
  return (
    <StyledItems>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </StyledItems>
  );
};

export default Items;
