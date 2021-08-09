import { useEffect } from "react";
import styled from "styled-components";
import logo from "../../../assets/b-logo.png";
import { BiMicrophone } from "react-icons/bi";

const StyledTopbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--navBGC);
  z-index: 10;
  transition: top 400ms;
  transition-delay: 400ms;
  img {
    max-width: 24px;
    margin-right: .5rem;
  }

  #searchBar {
    position: relative;
    border-radius: 99999px;
    height: 90%;
    /* border: 2px solid white; */
    display: flex;
    align-items: center;
    flex-grow: 1;
    input {
      border: none;
      border-radius: 99999px;
      background-color: rgba(50, 50, 50, 0.8);
      padding: 12px 1.25rem;
      color: white;
      width: 100%;
      font-size: 1.1rem;
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

const Topbar = () => {

  useEffect(() => {
		let prev = window.pageYOffset
		const see = () => {
			var current = window.pageYOffset
			if (prev > current) {
				document.getElementById('topbar').style.visibility = 'visible'
			} else {
				document.getElementById('topbar').style.visibility = 'hidden'
			}
			prev = current
		}

		window.addEventListener('scroll', see)
		return () => window.removeEventListener('scroll', see)
	}, [])
  return (
    <StyledTopbar id="topbar">
      <img src={logo} alt="" />

      <div id="searchBar">
        <input type="search" placeholder="Search or type URL" />
      
        <BiMicrophone />
      </div>
    </StyledTopbar>
  );
};

export default Topbar;
