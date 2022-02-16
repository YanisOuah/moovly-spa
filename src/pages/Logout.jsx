import { useContext } from "react";
import { AppContext } from "../context";

const LogoutPage = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
  return (
    <>
      <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
      <div>logout</div>
    </>
  );
};

export default LogoutPage;
