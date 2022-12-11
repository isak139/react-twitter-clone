import "./App.css";
import Widgets from "./components/widget/Widgets";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className="app">
      <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Timeline isAuth={isAuth} />
      <Widgets />
    </div>
  );
}

export default App;
