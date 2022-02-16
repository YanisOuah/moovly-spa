import { useEffect, useState } from "react";

const HomePage = () => {
  const [cat, setCat] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const getNewCat = () => {
    setIsloading(true);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setCat(data[0]);
        setIsloading(false);
      });
  };
  useEffect(() => {
    getNewCat();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => getNewCat()}
          disabled={isLoading}
          style={{
            margin: "20px auto",
          }}
        >
          new cat pls
        </button>
        <br></br>
        {cat && <img src={cat.url} width="200px" alt="random cat"></img>}
      </div>
    </>
  );
};

export default HomePage;
