import styled from "styled-components";
import { GiStripedSun } from "react-icons/gi";
import { RiPhoneCameraLine } from "react-icons/ri";
import { BiMicrophone } from "react-icons/bi";
const StyledSearchbar = styled.div`
  color: white;
  #weather {
    padding-left: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      color: orange;
      font-size: 1.9rem;
    }
    #temp {
      background-color: #cdcdcd50;
      font-weight: 500;
      width: min-content;
      white-space: nowrap;
      padding: 2px 12px;
      border-radius: 99999px;
      font-size: 1.2rem;
      box-shadow: var(--boxShadow);
    }
  }
  #searchbar {
    margin-top: 0.75rem;
    position: relative;
    box-shadow: var(--boxShadow);
    border-radius: 99999px;
    input {
      border: none;
      border-radius: 99999px;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 12px 1.25rem;
      color: white;
      width: 100%;
      font-size: 1.2rem;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: var(--svgSize);
      color: #8abae6;
      &:first-of-type {
        right: 4rem;
      }
      &:last-of-type {
        right: 1.25rem;
      }
    }
  }
`;

const Searchbar = () => {
  return (
    <StyledSearchbar>
      <div id="weather">
        <GiStripedSun />
        <div id="temp">
          <span>76&deg;F</span>
        </div>
      </div>
      <div id="searchbar">
        <input type="search" placeholder="Search or type URL" />
        <RiPhoneCameraLine />
        <BiMicrophone />
      </div>
    </StyledSearchbar>
  );
};

export default Searchbar;
