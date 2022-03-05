import Test from "./components/Test";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Test />
      <ul>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
