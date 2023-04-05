import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Menu, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import SignIn from "./GeneralConfiguration/SignIn";

const Action = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    <SignIn></SignIn>;
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Menu vertical>
      {/* <Menu.Item><Icon name="user circle"/>Account</Menu.Item> */}
      <Dropdown text="Account" pointing="left" className="link item">
        <Dropdown.Menu>
          {/* <Dropdown.Item onclick>Sign the user up</Dropdown.Item> */}
          {/* <Dropdown.Item>Log the user in</Dropdown.Item>
          <Dropdown.Item>Log the user out</Dropdown.Item>
          <Dropdown.Item>Check password for the current user</Dropdown.Item> */}

          <div>
            <Dropdown.Item>
              <div onClick={openModal}>User is Logged out</div>
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown text="Navigation" pointing="left" className="link item">
        <Dropdown.Menu>
          <Dropdown.Item>Go to next page...</Dropdown.Item>
          <Dropdown.Item>Go to previous page</Dropdown.Item>
          <Dropdown.Item>Terminate this workflow</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown text="Data(Things)" pointing="left" className="link item">
        <Dropdown.Menu>
          <Dropdown.Item>Create a new thing...</Dropdown.Item>
          <Dropdown.Item>Delete thing...</Dropdown.Item>
          <Dropdown.Item>Upload data as CSV</Dropdown.Item>
          <Dropdown.Item>Delete an uploaded file</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};
export default Action;
