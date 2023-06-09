import { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [roi, setRoi] = useState(0);
  const [time, setTime] = useState(0);
  const [ans, setAns] = useState(0);
  const calc = () => {
    let ok = (parseFloat(roi) * parseFloat(time) * parseFloat(principal)) / 100;
    ok = parseFloat(ok);
    console.log(typeof ok);
    setAns(ok);
  };
  return (
    <div className="App">
      <div className="heading">
        <h1>Simple Interest Calculator</h1>
      </div>

      <div className="main">
        <h5>Input your Principal amount</h5>
        <input
          type="text"
          value={principal}
          onChange={(e) => {
            setPrincipal(e.target.value);
          }}
        />
      </div>

      <div className="main">
        <h5>Input your ROI</h5>
        <input
          type="text"
          value={roi}
          onChange={(e) => {
            setRoi(e.target.value);
          }}
        />
      </div>

      <div className="main">
        <h5>Input your ROI</h5>
        <input
          type="text"
          value={time}
          onChange={(e) => {
            setRoi(e.target.value);
          }}
        />
      </div>
      <h3>Your total interest is {ans}</h3>
      <button onClick={calc}>Ok</button>
    </div>
  );
}

export default App;
