import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [consumed, setConsumed] = useState(0);
  const [percentageConsumed, setPercentageConsumed] = useState(0);
  const [goalText, setGoalText] = useState(
    "Goal not met yet, drink some more."
  );

  const calculatePercentage = (x, y) => {
    return (x / y) * 100;
  };

  const consumedHandler = () => {
    if (consumed < 2000) {
      setConsumed(consumed + 250);
      setPercentageConsumed(calculatePercentage(consumed, 2000));
    } else {
      setConsumed(2000);
    }
  };

  useEffect(() => {
    if (consumed === 2000) {
      setGoalText("Goal met! Well done.");
    }
  }, [consumed]);

  useEffect(() => {
    setPercentageConsumed(calculatePercentage(consumed, 2000));
  }, [consumed]);

  return (
    <>

      <div className="center-container">
        <h1>Drink 2L water - each day!</h1>
        <h3>
          {consumed} ml ({percentageConsumed}%)
        </h3>

        <div className="cylinderContainer">

          <div
            className="cylinder"
            style={{
              backgroundImage: `linear-gradient(0deg, rgb(65, 65, 208) ${percentageConsumed}%, rgba(0, 128, 0, 0.278) 0%)`,
            }}
          >

          </div>
        </div>

        <h3>{goalText}</h3>

        <div className="buttonContainer">
          <Button onClick={consumedHandler}>+ 250 ml</Button>
        </div>
      </div>
    </>
  );
}

export default App;
