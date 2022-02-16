import { Link } from "react-router-dom";
import styled from "styled-components";
import MoovlyLogo from "../img/moovly logo.svg";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #232d64;
  height: 3em;
  > img {
    height: 80%;
    max-height: 2em;
    position: absolute;
    left: 0;
    margin-left: 1em;
  }
  > a {
    font-weight: bold;
    color: #f1f1f1;
    margin: 0 20px;
  }
`;
const Navigation = () => {
  return (
    <>
      <HeaderDiv>
        <img src={MoovlyLogo} alt="Moovly Logo" />
        <Link to={"../"}>Home</Link>
        <Link to={"../extra"}>Extra</Link>
        <Link to={"../logout"}>Logout</Link>
      </HeaderDiv>
    </>
  );
};

export default Navigation;
