import "./App.css";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";
function App() {
  return (
    <div className="page-wrapper">
      <div className="calendar-wrapper">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
