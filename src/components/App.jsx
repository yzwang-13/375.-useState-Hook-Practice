import React, { useState } from "react";

//Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

let time = new Date().toLocaleTimeString();
console.log(time);

function App() {
  const [iniTime, setTime] = useState(time);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{iniTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
