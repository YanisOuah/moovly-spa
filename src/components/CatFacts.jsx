import { useEffect, useState } from "react";

const CatFacts = () => {
  const [catfacts, setCatfacts] = useState([]);
  const [dragInfo, setDragInfo] = useState({
    data: [],
    index: 0,
    setter: (o) => {},
  });
  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setCatfacts(data.map((o) => o.text)));
  }, []);
  const handleDragStart = (e, index, data, setter) => {
    setDragInfo({ data, setter, index });
  };
  const handleDragEnter = (e, index) => {
    // const newList = [...list];
    // const item = newList[dragItem];
    // newList.splice(dragItem, 1);
    // newList.splice(index, 0, item);
    // //setDragItem(index);
    // setList(newList);
  };
  const handleDragLeave = (e) => {
    //e.target.style.backgroundColor = "white";
  };

  const handleDrop = (e, index, data, setter) => {
    //e.target.style.backgroundColor = "#808080";
    const item = data[index];
    const item2 = dragInfo.data[dragInfo.index];
    if (data === dragInfo.data) {
      const newList = [...data];
      [newList[index], newList[dragInfo.index]] = [
        newList[dragInfo.index],
        newList[index],
      ];
      setter(newList);
    } else {
      setter([...data.slice(0, index), item2, ...data.slice(index + 1)]);
      dragInfo.setter([
        ...dragInfo.data.slice(0, dragInfo.index),
        item,
        ...dragInfo.data.slice(dragInfo.index + 1),
      ]);
    }
  };
  return (
    <>
      <h3>Please drag this list in order</h3>
      <ol className="dnd">
        {catfacts &&
          catfacts.map((item, index) => (
            <li
              draggable
              key={index}
              onDragStart={(e) =>
                handleDragStart(e, index, catfacts, setCatfacts)
              }
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e, index, catfacts, setCatfacts)}
              onDragOver={(e) => e.preventDefault()}
            >
              {item !== null ? item : "-"}
            </li>
          ))}
      </ol>
    </>
  );
};
export default CatFacts;
