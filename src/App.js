import "./styles.css";
import List from "./List.jsx";
var luckyNumber = Math.random() * 10;
var luckyNumber1 = Math.floor(luckyNumber);
const name = "Kate";
const sName = "Makarenkova";
const currentDate = new Date();
const year = currentDate.getFullYear();
const date1 = currentDate.getHours();
const customStyle = {
  color: ""
};
console.log(date1);

export default function App() {
  let greeting;
  if (date1 < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (date1 < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "blue";
  } else {
    greeting = "Good Evening";
    customStyle.color = "green";
  }
  return (
    <div className="App">
      <h1>Created by {name + " " + sName}</h1>

      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>

      <p>Her favorite Number is {luckyNumber1}</p>
      <p>Her favorite food</p>
      <List />
      <div>
        <img
          className="food-img"
          alt="bacon"
          src="data:image/jpeg;base64,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"
        ></img>
        <img
          className="food-img"
          alt="noodles"
          src="data:image/jpeg;base64,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"
        ></img>
      </div>
      <p>Copyright {year}</p>
    </div>
  );
}
