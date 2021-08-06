import styled from "styled-components";
import Articles from "./Articles/Articles";
import Icons from "./Icons/Icons";
import Searchbar from "./Searchbar/Searchbar";

const StyledInner = styled.div`
  overflow-y: scroll;
  height: 100vh;
  padding: 3rem 1rem;
`;

const Inner = () => {
  return (
    <StyledInner>
      <Searchbar />
      <Icons />
      <Articles />
    </StyledInner>
  );
};

export default Inner;
