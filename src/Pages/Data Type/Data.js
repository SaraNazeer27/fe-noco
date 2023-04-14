import React from 'react'
import Navbar from '../../Components/Navbar'
import './Data.css'
import { useNavigate } from 'react-router-dom';

function Data() {
  let navigate = useNavigate(); 

  const routeChange2 = () =>{ 
    let path = `/Type`; 
    navigate(path);
  }

  const routeChange1 = () =>{ 
    let path = `/Field`; 
    navigate(path);
  }

    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
  }

  return (
    <div>
        <Navbar></Navbar>
        <div class="container">
        <form>
    <div class="clearfix">
      <h2>Data Type</h2>
      <button type="button" class="cancelbtn" onClick={routeChange }>Cancel</button>
      <button type="submit" class="createbtn" onClick={routeChange2 }>Create</button>
    </div>
    </form>
    </div>

    <div class="container">
        <form>
    <div class="clearfix">
    <h2>Data Field</h2>
      <button type="button" class="cancelbtn" onClick={ routeChange} >Cancel</button>
      <button type="submit" class="createbtn" onClick={routeChange1}>Create</button>
    </div>
    </form>
    </div>
     
  </div>
  );
}

export default Data;