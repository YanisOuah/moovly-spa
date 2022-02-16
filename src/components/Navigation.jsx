import { Link } from "react-router-dom";
import styled from "styled-components";
import MoovlyLogo from "../img/MoovlyLogo.svg";

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
`;
const TestLink = styled(Link)`
  font-weight: bold;
  color: #f1f1f1;
  margin: 0 20px;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`;
const Navigation = ({ path }) => {
  return (
    <>
      <HeaderDiv>
        <img src={MoovlyLogo} alt="MoovlyLogo" />
        <TestLink active={path === "home"} to={"../"}>
          Home
        </TestLink>
        <TestLink active={path === "extra"} to={"../extra"}>
          Extra
        </TestLink>
        <TestLink active={path === "logout"} to={"../logout"}>
          Logout
        </TestLink>
      </HeaderDiv>
    </>
  );
};

export default Navigation;
