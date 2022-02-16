import { useContext } from "react";
import Navigation from "../components/Navigation";
import { AppContext } from "../context";

const HomePage = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <>
      <Navigation />
      <div>welcome to moovly</div>
    </>
  );
};

export default HomePage;
