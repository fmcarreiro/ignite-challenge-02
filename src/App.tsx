import "./styles/global.scss";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <div className="container">
        <header>
          <Header />
        </header>

        <main>
          <Content />
        </main>
      </div>
    </div>
  );
}
