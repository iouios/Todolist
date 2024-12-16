import React, { useState, useEffect } from "react";
import Input from "./components/input";
import AddDelete from "./components/addDelete";
import AddBookmark from "./components/addBookmark";
import styled from "styled-components";

// Define types for the state
type Item = string; // Assuming the items in valueList are strings

function App() {
  const [valueList, setValueList] = useState<Item[]>([]); // List of items (strings)
  const [bookmarkedItems, setBookmarkedItems] = useState<Item[]>([]); // List of bookmarked items (strings)

  useEffect(() => {
    const storedValueList = localStorage.getItem("valueList");
    const storedBookmarks = localStorage.getItem("bookmarkedItems");

    const savedData = storedValueList ? JSON.parse(storedValueList) : [];
    const savedBookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : [];

    setValueList(savedData);
    setBookmarkedItems(savedBookmarks);
  }, []);

  console.log(valueList, bookmarkedItems);

  const YellowCircle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    border-radius: 10px;
    border: 2px solid #ffdd5b;
    padding: 20px;
    width: 100px;
    height: 40px;
  `;

  

  return (
    <div className="p-4 w-full h-screen bg-black flex justify-center items-center animate-background">
      <div className="justify-self-center border-2 border-yellow-300 rounded-lg p-4 text-white">
        <Input valueList={valueList} setValueList={setValueList} />
        <ul>
          {valueList.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 items-center pt-2 pb-2"
            >
              <YellowCircle>{item}</YellowCircle>
              <AddDelete
                item={item}
                valueList={valueList}
                setValueList={setValueList}
                bookmarkedItems={bookmarkedItems}
                setBookmarkedItems={setBookmarkedItems}
              />
              <AddBookmark
                item={item}
                bookmarkedItems={bookmarkedItems}
                setBookmarkedItems={setBookmarkedItems}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
