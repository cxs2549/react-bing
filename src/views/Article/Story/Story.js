import styled from "styled-components";

const StyledStory = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  padding: 1rem;
`;

const Story = () => {
  return (
    <StyledStory>
      <h1>headline</h1>
      <div>source/publishedAt</div>
      <div>icons</div>
      <div>
        <img src="" alt="" />
        image <br />
        <span>caption</span> <br />
        <span>2nd caption</span>
      </div>
      <div>story</div>
      <div>comments</div>
      <div>more for you</div>
    </StyledStory>
  );
};

export default Story;
