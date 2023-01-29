import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./pages/Main";
import { Fragment, useState, useEffect } from "react";
import SidebarPanel from "./components/Sidebar/SidebarPanel";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction } from "./redux/Actions/authActions";

function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const [activeSidebar, setActiveSidebar] = useState(true);
  const [activeSidebarPanel, setActiveSidebarPanel] = useState(false);

  useEffect(() => {
   sessionStorage.getItem("user")!==null &&  dispatch(loadUserAction())
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar
          setActiveSidebar={setActiveSidebar}
          setActiveSidebarPanel={setActiveSidebarPanel}
        />

        <div className="content">
          <Sidebar active={activeSidebar} />
          <SidebarPanel active={activeSidebarPanel} />
          {loading ?<Loader />: <Main active={activeSidebar} /> }
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
