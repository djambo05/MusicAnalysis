import { Layout } from "./Components/Layout/Layout";
import "./style/global.scss";

function App() {
  return (
    <div
      style={{
        display: "block",
        height: "100vh",
        width: "auto",
      }}
    >
      <Layout />
      <div
        style={{
          display: "block",
          marginLeft: "120px",
          width: "100vh",
          height: "100vh",
        }}
      >
        Main Block
      </div>
    </div>
  );
}

export default App;
