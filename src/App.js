import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./comps/layout/SearchBar";
import Logs from "./comps/logs/Logs";
import AddBtn from "./comps/layout/AddBtn";
import AddLogModal from "./comps/logs/AddLogModal";
import EditLogModal from "./comps/logs/EditLogModal";
import AddTechModal from "./comps/techs/AddTechModal";
import TechListModal from "./comps/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
}

export default App;
