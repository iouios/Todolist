import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [valueitem, setValueitem] = useState("");
  const [valueList, setValueList] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    const storedValueList = localStorage.getItem("valueList");
    const storedBookmarks = localStorage.getItem("bookmarkedItems");

    const savedData = storedValueList ? JSON.parse(storedValueList) : [];
    const savedBookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : [];

    setValueList(savedData);
    setBookmarkedItems(savedBookmarks);
  }, []);

  const handleNameChange = (event) => {
    setValueitem(event.target.value);
  };

  const handleAddValue = () => {
    if (valueitem.trim() === "") return; 

    const updatedList = [valueitem, ...valueList]; 
    setValueList(updatedList);
    localStorage.setItem("valueList", JSON.stringify(updatedList));
    setValueitem(""); 
  };

  const handleDeleteValue = (item) => {
    const updatedList = valueList.filter((val) => val !== item);
    setValueList(updatedList);
    localStorage.setItem("valueList", JSON.stringify(updatedList));

    const updatedBookmarks = bookmarkedItems.filter((val) => val !== item);
    setBookmarkedItems(updatedBookmarks);
    localStorage.setItem("bookmarkedItems", JSON.stringify(updatedBookmarks));
  };

  const handleBookmark = (item) => {
    const isBookmarked = bookmarkedItems.includes(item);
    const updatedBookmarks = isBookmarked
      ? bookmarkedItems.filter((val) => val !== item)
      : [...bookmarkedItems, item];

    setBookmarkedItems(updatedBookmarks);
    localStorage.setItem("bookmarkedItems", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="p-4 w-full h-screen bg-black flex justify-center items-center animate-background">
      <div className="justify-self-center border-2 border-yellow-300 rounded-lg p-4 text-white">
        <div className="grid grid-rows-1 grid-flow-col gap-2 pb-2">
          <input
            type="text"
            className="border-2 bg-black mb-2 mt-2 rounded-lg p-2"
            value={valueitem}
            onChange={handleNameChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleAddValue();
            }}
          />
          <button
            className="border-2 border-yellow-300 mb-2 mt-2 rounded-lg p-2"
            onClick={handleAddValue}
          >
            Add
          </button>
        </div>
        <div className="border-2 border-yellow-300 rounded-lg p-4">
          {valueList.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 items-center p-2"
            >
              <div className="border-2 border-yellow-300 rounded-lg p-2">
                {item}
              </div>
              <button
                className="border-2 border-yellow-300 rounded-lg p-2"
                onClick={() => handleDeleteValue(item)}
              >
                Delete
              </button>
              <button
                className={`border-2 rounded-lg p-2 ${
                  bookmarkedItems.includes(item)
                    ? "bg-yellow-300 text-black "
                    : "border-yellow-300 text-white"
                }`}
                onClick={() => handleBookmark(item)}
              >
                Bookmark
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
