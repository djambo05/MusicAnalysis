import { Search } from "./Search";
import { Header } from "./Header";
import { Choose } from "./Choose";
import { Auditions } from "./Auditions";
import "./index.scss";
import { LineChart } from "./Graph";
export const Main = () => {
  return (
    <div
      style={{
        display: "block",
        paddingLeft: "70px",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "block",
          padding: "16px 50px",
          width: "100%",
          height: "100vh",
        }}
      >
        <Header />
        <Search />
        <Choose />
        <Auditions />
        {/* <LineChart /> */}
      </div>
    </div>
  );
};
