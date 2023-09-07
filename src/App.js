import "./App.css";
import React, { useRef, useState } from "react";
import List from "./List";

const arr = ["каждый", "охотник", "желает", "знать", "где", "сидит", "фазан"];

function App() {
  const inputRef = useRef();

  const [inputText, setInputText] = useState("");
  const [arr1, setArr1] = useState(arr);

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && inputText !== "") {
      setArr1((prevArr) => [inputText, ...prevArr]);
      setInputText("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="input1"
          type="text"
          ref={inputRef}
          placeholder="Введите текст и нажмите Enter"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        ></input>
        <br></br>
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          Focus
        </button>
        <br></br>
        <List array={arr1} />
      </header>
    </div>
  );
}

export default App;
