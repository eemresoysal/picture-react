// import logo from "./logo.svg";
import Homepage from "./pages/Homepage";
// import Picture from "./components/Picture";
import { data } from "./helper/data";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Homepage data={data} />
    </div>
  );
}

export default App;
