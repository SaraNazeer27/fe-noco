import React from 'react'
import Navbar from '../../Components/Navbar'
import './Data.css'

function Data() {
  return (
    <div>
        <Navbar></Navbar>
        <div class="container">
        <form>
    <div class="clearfix">
      <h2>Data Type</h2>
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="createbtn">Create</button>
    </div>
    </form>
    </div>

    <div class="container">
        <form>
    <div class="clearfix">
    <h2>Data Field</h2>
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="createbtn">Create</button>
    </div>
    </form>
    </div>
     
  </div>
  );
}

export default Data;