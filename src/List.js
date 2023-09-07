import React, { useState } from "react";

function List({ array }) {
  let [, setState] = useState(array);
  let increment = () => setState(add);
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
