import React, { useState } from "react";

function List({ array }) {
  const [state, setState] = useState(array);
  const increment = () => setState(add);
  const listItems = array.map((item, index) => <li key={index + 1}>{item}</li>);
  const add = () => array.unshift("!!!");
  return (
    <>
      <button onClick={increment}>add !!!</button>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
