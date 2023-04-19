import React,{ useState} from 'react';
import DataItem from './data-item';
import Modal from './Modal';
import data from './data.json';
import './Appdata.css'

  const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState(data);
    const [currentUser, setCurrentUser] = useState(null);
  
    const toggleModal = () => {
      setShowModal(!showModal);
    }
  
    const addUser = user => {
      if (currentUser) {
        setUserData(userData.map(data => (data.id === user.id ? user : data)));
        setCurrentUser(null);
        return;
      }
      user.id = userData.length + 1;
      setUserData([...userData, user]);
    }
  
    const editUserHandler = user => {
      setCurrentUser(user);
      toggleModal();
    }
  
    const deleteUser = user => {
      setUserData(userData.filter(item => item.name !== user.name));
    }
  return (
    <div>
      <div className="header">
        <span className="title">App Data</span>
        <button onClick={toggleModal}>Add new</button>
      </div>
      <DataItem data={userData} onEdit={editUserHandler} onDelete={deleteUser} />
      <Modal onCancel={toggleModal} onSubmit={addUser} show={showModal} data={userData} editUser={currentUser} />
    </div>
  )
}


export default App;

/*const Appdata = ({data, onEdit, onDelete}) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {(
        data.map(user => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user)}>Delete</button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>        
);
export default Appdata;
*/