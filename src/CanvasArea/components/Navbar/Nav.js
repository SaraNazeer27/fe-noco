import React from 'react';
import { FaUndo, FaRedo, FaSave, FaEye, FaCog } from 'react-icons/fa';
import styled from 'styled-components';



const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #efbefe;
  height: 40px;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
  
  
  
`;

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  
`;

const Tab = styled.li`
  margin: 0 10px;
  font-size: 18px;
`;

const Icon = styled.span`
  display: inline-block;
  margin-right: 5px;
`;

const Navigation = (props) => {
  return (
    <Navbar>
      <Logo>noco</Logo>
      <Tabs>
      <button
        type="button"
        className={`btn ${props.activeTab === 0 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(0)}>
        <Tab>PAGES</Tab>
      </button>
      <button
        type="button"
        className={`btn ${props.activeTab === 1 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(1)}>
        <Icon><FaSave /></Icon>
        
      </button>
      <button
        type="button"
        className={`btn ${props.activeTab === 2 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(2)}>
         <Icon><FaUndo /></Icon> 
        
      </button>
      
      <button
        type="button"
        className={`btn ${props.activeTab === 3 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(3)}>
        <Icon><FaRedo /></Icon> 
        
      </button> 
     
      <button
        type="button"
        className={`btn ${props.activeTab === 4 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(4)}>
        <Icon><FaEye /></Icon><Tab>Preview</Tab>
         
      </button> 
      <button
        type="button"
        className={`btn ${props.activeTab === 5 ? "active-button" : ""}`}
        onClick={() => props.onChangeActiveTab(5)}>
         <Icon><FaCog /></Icon> 
      </button>  
         
      </Tabs>
    </Navbar>
  );
};

export default Navigation;
