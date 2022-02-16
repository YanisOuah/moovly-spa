import { useContext } from "react";
import { AppContext } from "../context";

const LogoutPage = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <button
        onClick={() => dispatch({ type: "logout" })}
        style={{
          margin: "50px auto",
          display: "flex",
        }}
      >
        Logout
      </button>
    </>
  );
};

export default LogoutPage;
