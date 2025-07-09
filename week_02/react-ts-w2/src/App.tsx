import { BrowserRouter } from "react-router";
import "./App.css";
// import { Day06 } from "./Practice/Day06/Day06";
import { AppRoute } from "./AppRoute";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        {/* <Day06 /> */}
        {/* <Day07 /> */}
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
