
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Main } from './pages/Main';
import { Fragment, useState, useEffect } from 'react';
import SidebarPanel from './components/Sidebar/SidebarPanel';

function App() {

  const [activeSidebar, setActiveSidebar] = useState(true);
  const [activeSidebarPanel, setActiveSidebarPanel] = useState(false);

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar setActiveSidebar={setActiveSidebar} setActiveSidebarPanel={setActiveSidebarPanel} />
      
        <div className='content'>
          <Sidebar active={activeSidebar} />
          <SidebarPanel active={activeSidebarPanel} />
          <Main active={activeSidebar}/>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
