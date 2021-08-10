import styled from "styled-components";
import { HiOutlineThumbUp } from "react-icons/hi";
import { RiHandHeartLine } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Link } from "react-router-dom";

const StyledArticle = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-color: ${props => (props.color || '#333')};
  overflow: hidden;
  @media (min-width: 640px) {
    margin-bottom: 0;
  }
  #image {

    border-radius: 8px;
    flex-grow: 1;
    position: relative;
    z-index: 1;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 5rem;
      right: 0;
      background-image: linear-gradient(to bottom, transparent, ${props => (props.color || '#333')});
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
      object-position: center center;
      display: block;
      position: relative;
    }
  }
  #textContainer {
    position: relative;
    
  }
  #text {
    width: 100%;
    color: ${props => (props.text || 'white')};
    position: relative;
    bottom: 0;
    left: 0;
    padding: 1rem;
    margin-top: -2.5rem;
    z-index: 10;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
    #source {
      margin-bottom: 0.75rem;
      display: flex;
      align-content: center;
      position: relative;
      z-index: 2;
      img {
        max-width: 16px;
        max-height: 16px;
        margin-right: 0.45rem;
        border-radius: 3px;
      }
      span {
        font-size: 80%;
        margin-right: 0.25rem;
        &:first-of-type::after {
          content: "•";
          padding-left: 0.25rem;
          opacity: 0.7;
        }
      }
    }
    h1 {
      font-size: 115%;
      position: relative;
      z-index: 2;
      @media (min-width: 1024px) {
        height: 100px;
      }
    }
    #icons {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
      #trio {
        display: flex;
        align-items: center;
        > div {
          margin-right: 0.5rem;
          padding: 6px 2px;
        }
        svg {
          font-size: 1.2rem;
        }
        span {
          margin-left: 0.25rem;
          font-size: 80%;
        }
        #like {
          padding: 6px 12px;
          padding-bottom: 8px;
          margin-right: 0.5rem;
          display: flex;
          align-items: center;
          background-color: ${props => (props.color)};
          filter: brightness(155%);
          border-radius: 99999px;
        }
      }
      #ellipsis {
        padding: 6px 6px;
        display: flex;
        align-items: center;
        background-color: rgba(58, 58, 58, 0.7);
        border-radius: 99999px;
      }
    }
  }
`;

const Article = ({ article }) => {
  return (
    <StyledArticle color={article.color} text={article.text}>
      <Link id="image" to="/articles/id">
        <img src={article.image} alt="" />
      </Link>

      <div id="textContainer">
        <div id="text">
          <div id="source">
            {article.sourceImage && <img src={article.sourceImage} alt="" />}
            <span>{article.network}</span>
            <span>{article.publishedAt}</span>
          </div>
          <h1>{article.headline}</h1>
          <div id="icons">
            <div id="trio">
              <div id="like">
                <HiOutlineThumbUp />
                <span>Like</span>
              </div>
              <div>
                <RiHandHeartLine />
                <span>{article.likes}</span>
              </div>
              {article.comments && (
                <div>
                  <BiComment />
                  <span>{article.comments}</span>
                </div>
              )}
            </div>
            <div id="ellipsis">
              <AiOutlineEllipsis />
            </div>
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Article;
