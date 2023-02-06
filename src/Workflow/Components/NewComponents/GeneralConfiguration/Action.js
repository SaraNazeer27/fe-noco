import React,{useEffect, useRef, useState} from 'react';
import { Dropdown, Menu,Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Action = () => {





  
return(
 
  <Menu vertical>
    {/* <Menu.Item><Icon name="user circle"/>Account</Menu.Item> */}
       <Dropdown text='Account' pointing='left' className='link item'>
        <Dropdown.Menu>
        <Dropdown.Item>Sign the user up</Dropdown.Item>
        <Dropdown.Item>Log the user in</Dropdown.Item>
        <Dropdown.Item>Signup/Login with a social network</Dropdown.Item>
        <Dropdown.Item>Log the user out</Dropdown.Item>
        <Dropdown.Item>Update the user's credentials</Dropdown.Item>
        <Dropdown.Item>Make changes to current user</Dropdown.Item>
        <Dropdown.Item>Send confirmation email</Dropdown.Item>
        <Dropdown.Item>Send password reset email</Dropdown.Item>
        <Dropdown.Item>Send magic logic link</Dropdown.Item>
        <Dropdown.Item>Create account for someone else</Dropdown.Item>
        <Dropdown.Item>Check password for the current user</Dropdown.Item>
        <Dropdown.Item>Assign a temp password to a user</Dropdown.Item>
        <Dropdown.Item>Change the email for another user</Dropdown.Item>
        <Dropdown.Item>Logout another user's sessions</Dropdown.Item> 
      </Dropdown.Menu>
      
 </Dropdown>


 <Dropdown text='Navigation' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Go to page...</Dropdown.Item>
        <Dropdown.Item>Refresh the page</Dropdown.Item>
        <Dropdown.Item>Go to previous page</Dropdown.Item>
        <Dropdown.Item>Open an external website</Dropdown.Item>
        <Dropdown.Item>Add a pause before next action</Dropdown.Item>
        <Dropdown.Item>Terminate this workflow</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>


 <Dropdown text='Data(Things)' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Create a new thing...</Dropdown.Item>
        <Dropdown.Item>Make changes to thing...</Dropdown.Item>
        <Dropdown.Item>Make changes to a list of things...</Dropdown.Item>
        <Dropdown.Item>Delete thing...</Dropdown.Item>
        <Dropdown.Item>Delete a list of things...</Dropdown.Item>
        <Dropdown.Item>Copy a list of things...</Dropdown.Item>
        <Dropdown.Item>Set a thing's slug...</Dropdown.Item>
        <Dropdown.Item>Download data as CSV</Dropdown.Item>
        <Dropdown.Item>Upload data as CSV</Dropdown.Item>
        <Dropdown.Item>Delete an uploaded file</Dropdown.Item>
        <Dropdown.Item>Install more data(things) actions...</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>


 <Dropdown text='Email' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Send email</Dropdown.Item>
        <Dropdown.Item>Send meeting request by email</Dropdown.Item>
        <Dropdown.Item>Install more email actions...</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>


 <Dropdown text='Payment' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Install more payment actions...</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>


 <Dropdown text='Analytics' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Install more analytics actions...</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>


 <Dropdown text='Element Actions' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown text="All elements" pointing="left" className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Show</Dropdown.Item>
            <Dropdown.Item>Toggle</Dropdown.Item>
            <Dropdown.Item>Scroll to</Dropdown.Item>
            <Dropdown.Item>Hide</Dropdown.Item>
            <Dropdown.Item>Animate</Dropdown.Item>
            <Dropdown.Item>Set state</Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>

         
        <Dropdown text="Input" pointing="left" className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Set focus</Dropdown.Item>
            <Dropdown.Item>Reset inputs</Dropdown.Item>
  </Dropdown.Menu>
         </Dropdown>
  

         <Dropdown text="Group" pointing="left" className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Display data</Dropdown.Item>
            <Dropdown.Item>Reset data</Dropdown.Item>
  </Dropdown.Menu>
         </Dropdown>



         <Dropdown text="Repeating Group" pointing="left" className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Display list</Dropdown.Item>
            <Dropdown.Item>Show next</Dropdown.Item>
            <Dropdown.Item>Show previous</Dropdown.Item>
            <Dropdown.Item>Clear list</Dropdown.Item>
            <Dropdown.Item>Go to page</Dropdown.Item>
            <Dropdown.Item>Scroll to entry</Dropdown.Item>
  </Dropdown.Menu>
         </Dropdown>


         <Dropdown text="Map" pointing="left" className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Display markers</Dropdown.Item>
            <Dropdown.Item>Clear markers</Dropdown.Item>
            <Dropdown.Item>Adjust map zoom</Dropdown.Item>
            <Dropdown.Item>Set current map marker</Dropdown.Item>
  </Dropdown.Menu>
         </Dropdown>

      </Dropdown.Menu>
 </Dropdown>


 <Dropdown text='Plugins' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Install more plugin actions...</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>


<Dropdown text='Custom Events' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Trigger a custom event</Dropdown.Item>
        <Dropdown.Item>Schedule a custom event</Dropdown.Item>
        <Dropdown.Item>Trigger a custom event from a reusable element</Dropdown.Item>
        <Dropdown.Item>Trigger a custom event when data changes</Dropdown.Item>
        <Dropdown.Item>Schedule API Workflow</Dropdown.Item>
        <Dropdown.Item>Schedule API Workflow on a list</Dropdown.Item>
        <Dropdown.Item>Set/Cancel a recurring event</Dropdown.Item>
        <Dropdown.Item>Cancel a scheduled API Workflow</Dropdown.Item>
        <Dropdown.Item>Cancel a list of scheduled API Workflows</Dropdown.Item>
      </Dropdown.Menu>
 </Dropdown>

  </Menu>

)
}
export default Action;

