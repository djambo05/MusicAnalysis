import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Main } from "./Components/Main/Main";
import "./style/global.scss";
import { Other } from "./Components/Other/Other";
import { GlobalContextProvider } from "./Context/globalContext";

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
        <GlobalContextProvider>
          <Layout />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/other" element={<Other />} />
          </Routes>
        </GlobalContextProvider>
      </Router>
    </div>
  );
}

export default App;
