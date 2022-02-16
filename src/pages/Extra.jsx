import { useContext } from "react";
import Navigation from "../components/Navigation";
import { AppContext } from "../context";

const ExtraPage = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <>
      <Navigation />
      <div>extra page</div>
    </>
  );
};

export default ExtraPage;
