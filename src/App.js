import "./App.css";
import Main from "./Main";
import Sidebar from "./components/Sidebar";
import AppProvider from "./context";
function App() {
  return (
    <div className=" flex gap-2">
      <AppProvider>
        <Sidebar/>
        <Main/>
      </AppProvider>
    </div>
  );
}

export default App;
