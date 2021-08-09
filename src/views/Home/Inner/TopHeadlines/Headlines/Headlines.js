import styled from "styled-components";
import Headline from "./Headline/Headline";
import cap from "../../../../../assets/headlines/capital.jpg";
import fire from "../../../../../assets/headlines/fire.jpg";

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
  const headlines = [
    {
      title: "Senate advances bipartisan infrastructure bill in key test vote",
      source: "ABC News",
      publishedAt: "8 hours",
      likes: 519,
      comments: 157,
      image: cap,
    },
    {
      title: "Five missing as Dixie Fire ravages California towns",
      source: "The Hill",
      publishedAt: "58 mins",
      likes: 64,
      comments: 2,
      image: fire,
    },
    {
      title: "Five missing as Dixie Fire ravages California towns",
      source: "The Hill",
      publishedAt: "58 mins",
      likes: 64,
      comments: 2,
      image: fire,
    },
    {
      title: "Five missing as Dixie Fire ravages California towns",
      source: "The Hill",
      publishedAt: "58 mins",
      likes: 64,
      comments: 2,
      image: fire,
    },
    {
      title: "Five missing as Dixie Fire ravages California towns",
      source: "The Hill",
      publishedAt: "58 mins",
      likes: 64,
      comments: 2,
      image: fire,
    },
    {
      title: "Five missing as Dixie Fire ravages California towns",
      source: "The Hill",
      publishedAt: "58 mins",
      likes: 64,
      comments: 2,
      image: fire,
    },
  ];
  return (
    <StyledHeadlines>
      {headlines.map((headline, i) => (
        <Headline key={i} headline={headline} />
      ))}
    </StyledHeadlines>
  );
};

export default Headlines;
