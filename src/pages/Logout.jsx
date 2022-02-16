import { useContext } from "react";
import Navigation from "../components/Navigation";
import { AppContext } from "../context";

const LogoutPage = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
  return (
    <>
      <Navigation />
      <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
      <div>logout</div>
    </>
  );
};

export default LogoutPage;
