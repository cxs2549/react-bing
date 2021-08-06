import styled from "styled-components";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineAppstoreAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const StyledIcons = styled.div`
  height: 100%;
  nav {
    height: 100%;
  }
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    color: #ffffffde;
    padding: 0 2.5rem;
    li {
      &:first-of-type {
        color: #ffffff88;
      }
    }
    svg {
      font-size: var(--svgSize);
    }
    a {
      color: inherit;
    }
    .active {
      color: #8ABAE6;
    }
  }
`;

const Icons = () => {
  return (
    <StyledIcons>
      <nav>
        <ul>
          <li>
            <IoIosArrowBack />
          </li>
          <li>
            <FaRegNewspaper />
          </li>
          <li>
            <NavLink to="/">
              <RiHome5Line />
            </NavLink>
          </li>
          <li>
            <AiOutlineUser />
          </li>
          <li>
            <AiOutlineAppstoreAdd />
          </li>
        </ul>
      </nav>
    </StyledIcons>
  );
};

export default Icons;
