import "./App.css";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <span>
        Nifty 50 is trading <span>below</span>its
      </span>
      <h1>50-day moving average</h1>
      <Main />
    </div>
  );
}

export default App;
