import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Main } from "./Components/Main/Main";
import "./style/global.scss";
import { Other } from "./Components/Other/Other";

function App() {
  return (
    <div
      style={{
        display: "block",
        height: "100vh",
        width: "auto",
      }}
    >
      <Router>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/other" element={<Other />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
