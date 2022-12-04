import "./App.css";
import Widgets from "./components/widget/Widgets";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  );
}

export default App;
