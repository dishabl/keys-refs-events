import React from "react";

function List({ array, func }) {
  const listItems = array.map((item, index) => <li key={index + 1}>{item}</li>);

  return (
    <>
      <button onClick={func}>add !!!</button>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
