import "./App.css";
import Widgets from "./components/widget/Widgets";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import { AuthProvider } from "./AuthContext";

function App() {
  //const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div className="app">
      <AuthProvider>
        <Sidebar /* isAuth={isAuth} setIsAuth={setIsAuth} */ />
        <Timeline /* isAuth={isAuth} */ />
        <Widgets />
      </AuthProvider>
    </div>
  );
}

export default App;
