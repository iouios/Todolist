import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [valueitem, setValueitem] = useState(""); // For current input value
  const [valueList, setValueList] = useState([]); // For storing the list of items

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("valueList")) || [];
    setValueList(savedData);
  }, []);

  const handleNameChange = (event) => {
    setValueitem(event.target.value);
  };

  const handleAddValue = () => {
    if (valueitem.trim() === "") return; // Prevent adding empty strings

    const updatedList = [...valueList, valueitem];
    setValueList(updatedList);
    localStorage.setItem("valueList", JSON.stringify(updatedList));
    setValueitem(""); // Clear input
  };

  const handleDeleteValue = (item) => {
    const updatedList = valueList.filter((val) => val !== item);
    setValueList(updatedList);
    localStorage.setItem("valueList", JSON.stringify(updatedList));
  };

  return (
    <div>
      <div>
        <div className="justify-self-center">
          <div className="grid grid-rows-1 grid-flow-col gap-2">
            <input
              type="text"
              className="border-2 border-black mb-2 mt-2 rounded-lg p-2"
              value={valueitem}
              onChange={handleNameChange}
            />
            <button
              className="border-2 border-black mb-2 mt-2 rounded-lg p-2"
              onClick={handleAddValue}
            >
              Add
            </button>
          </div>
          <div className="border-2 border-black rounded-lg p-2">
            {valueList.map((item, index) => (
              <div
                key={index}
                className="grid grid-rows-1 grid-flow-col gap-2 items-center mb-2"
              >
                <div className="border-2 border-black rounded-lg p-2">
                  {item}
                </div>
                <button
                  className="border-2 border-black rounded-lg p-2"
                  onClick={() => handleDeleteValue(item)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
