import React, { useState } from 'react';
import './Sidebar.css';
//import Components from '../components/Components';
import { dragStart, drag, dragEnd } from "../../scripts/drag-and-drop";


const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('noco');
  const [activeTool, setActiveTool] = useState(null);
  const [toolDropdownOpen, setToolDropdownOpen] = useState(false);

  const handleTabClick = (tab) => {
    if (tab === activeTab) {
      setActiveTab(null);
      setActiveTool(null);
      setToolDropdownOpen(false);
    } else {
      setActiveTab(tab);
      setActiveTool(null);
      setToolDropdownOpen(false);
    }
  };

  const handleToolClick = (tool) => {
    setActiveTool(tool);
    setToolDropdownOpen(false);
  };

  const handleToolDropdownClick = () => {
    setToolDropdownOpen(!toolDropdownOpen);
  };

  const handleCloseToolbox = () => {
    setActiveTab(null);
    setActiveTool(null);
    setToolDropdownOpen(false);
  };
  function btnClick(e) {
    e.stopPropagation()
}

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">noco</div>
      </div>
      <div className="sidebar-tabs">
        <div className={`sidebar-tab ${activeTab === 'Design' ? 'active' : ''}`} onClick={() => handleTabClick('Design')}>
          Design
        </div>
        <div className={`sidebar-tab ${activeTab === 'Workflow' ? 'active' : ''}`} onClick={() => handleCloseToolbox()}>
          Workflow
        </div>
        <div className={`sidebar-tab ${activeTab === 'Data' ? 'active' : ''}`} onClick={() => handleTabClick('Data')}>
          Data
        </div>
        <div className={`sidebar-tab ${activeTab === 'Styles' ? 'active' : ''}`} onClick={() => handleTabClick('Styles')}>
          Styles
        </div>
        <div className={`sidebar-tab ${activeTab === 'Settings' ? 'active' : ''}`} onClick={() => handleTabClick('Settings')}>
          Settings
        </div>
      </div>
      {activeTab === 'Design' && (
        <div className="toolbox-pane">
          <div className={`toolbox-tab ${activeTool === 'Input' ? 'active' : ''}`} onClick={() => handleToolClick('Input')}>
            Selection Elements
            <div className={`toolbox-dropdown ${activeTool === 'Input' && toolDropdownOpen ? 'open' : ''}`}>
              <div className="toolbox-option" onClick={() => console.log('Check_Box clicked')}>Check Box</div>
              <div className="toolbox-option" onClick={() => console.log('Button clicked')}><button className="btn" style={{ backgroundColor: '#1d1dc1', color: 'white', width: "150px", height: '50px' }} id="button-1" onClick={btnClick} draggable="true" onDragStart={(e) => dragStart(e)} onDrag={drag} onDragEnd={dragEnd}>button</button></div>
              <div className="toolbox-option" onClick={() => console.log('Radio Button clicked')}>Radio Button</div>
              <div className="toolbox-option" onClick={() => console.log('List_Box clicked')}>List Box</div>
              <div className="toolbox-option" onClick={() => console.log('Drop_Down clicked')}>Drop Down</div>
              <div className="toolbox-option" onClick={() => console.log('Slider clicked')}>Slider</div>
              <div className="toolbox-option" onClick={() => console.log('Date clicked')}>Date/Time Picker</div>
              
            </div>

            <div className={`toolbox-dropdown-arrow ${activeTool === 'Input' && toolDropdownOpen ? 'open' : ''}`} onClick={() => handleToolDropdownClick()}></div>
          </div>
          <div className={`toolbox-tab ${activeTool === 'Output' ? 'active' : ''}`} onClick={() => handleToolClick('Output')}>
            Output
          </div>
          <div className={`toolbox-tab ${activeTool === 'Layout' ? 'active' : ''}`} onClick={() => handleToolClick('Layout')}>
            Layout
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
