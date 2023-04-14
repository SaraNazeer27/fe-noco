import React from 'react'
import Navbar from '../../Components/Navbar';


function main() {
  return (
    <div>
        <Navbar></Navbar>
        <div class="container">
        <form>
           <h2>Create Data Type</h2>

    <label for="Type"><b>New Type</b></label>
    <input type="text" placeholder="Enter Type" name="Type" />

    <label for="des"><b>Description</b></label>
    <input type="text" placeholder="Enter Description" name="des" />
    
    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="createbtn">Create</button>
    </div>
 
    </form>
    </div>
    </div>
  )
}

export default main;