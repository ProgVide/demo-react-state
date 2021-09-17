import React, { useState } from "react";

function Room() {
  let [isLit, setLit] = useState(true);
  let [age, setAge] = useState(24);
  function handleLight() {
    console.log("Light Change.");
    setLit(!isLit);
  }
  const handleAge = () => {
    setAge(++age);
  };
  return (
    <div>
      This is Room {isLit ? "lit" : "dark"}
      <br />
      Age : {age}
      <br />
      <button onClick={() => setLit(!isLit)}>Toggle Light</button>
      <br />
      <button
        onClick={() => {
          setAge(++age);
        }}
      >
        Increase Age{" "}
      </button>
    </div>
  );
}

export default Room;
