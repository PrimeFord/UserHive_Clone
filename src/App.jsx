import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Wrapper1 from "./Components/Wrapper1";
import Wrapper2 from "./Components/Wrapper2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Wrapper1 />
      <Wrapper2 />
      <Footer />
    </div>
  );
}

export default App;
