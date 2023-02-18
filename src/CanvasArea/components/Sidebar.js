import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
//import Navbar from './Navbar/Nav';
//import { NavLink, Bars, NavMenu, NavBtn,NavBtnLink } from './Navbar/NavbarElements';

 /*const nav_header = styled.nav`
  background: #e097f7;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items:baseline;
  z-index: 12;
  justify-content: space-between;
  pading:4rem; 
  font-size: 19px;
`;*/

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 1rem;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
`;
//about sidebar
const SidebarNav = styled.nav`
  background: #efbefe;
  width: 180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
//about sidebar
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#221726' }}>
        
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          
          

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
