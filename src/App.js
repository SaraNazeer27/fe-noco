import React from 'react';
import MainTabBar from './Components/Header/Sidebar';
import MenuBar from './Components/Header/MenuBar';
import TabCanvas from './Components/Header/tabcanvas';


function App() {
  return (
    <div>
      <MenuBar />
      <MainTabBar />
      <TabCanvas />

    </div>
  );
}

export default App;
