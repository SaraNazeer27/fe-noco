import { useState } from "react";
import './MenuBar.css'

function MenuBar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const isMenuActive = (menu) => activeMenu === menu;

  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <button
            className={isMenuActive("file") ? "active" : ""}
            onClick={() => handleMenuClick("file")}
          >
            File
          </button>
          {isMenuActive("file") && (
            <ul className="menu">
              <li>New</li>
              <li>Preview</li>
              <li>Save</li>
            </ul>
          )}
        </li>
        <li>
          <button
            className={isMenuActive("edit") ? "active" : ""}
            onClick={() => handleMenuClick("edit")}
          >
            Edit
          </button>
          {isMenuActive("edit") && (
            <ul className="menu">
              <li>Undo</li>
              <li>Redo</li>
              <li>Cut</li>
              <li>Copy</li>
              <li>Paste</li>
            </ul>
          )}
        </li>
        <li>
          <button
            className={isMenuActive("view") ? "active" : ""}
            onClick={() => handleMenuClick("view")}
          >
            View
          </button>
          {isMenuActive("view") && (
            <ul className="menu">
              <li>Zoom In</li>
              <li>Zoom Out</li>
              <li>Actual Size</li>
            </ul>
          )}
        </li>
        <li>
          <button
            className={isMenuActive("help") ? "active" : ""}
            onClick={() => handleMenuClick("help")}
          >
            Help
          </button>
          {isMenuActive("help") && (
            <ul className="menu">
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
