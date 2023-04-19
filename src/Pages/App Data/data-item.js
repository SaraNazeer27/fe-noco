import React from 'react';

const DataItem = ({data, onEdit, onDelete}) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Date of Birth</th>
        <th>Email Address</th>
      </tr>
    </thead>
    <tbody>
      {(
        data.map(user => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.name}</td>
            <td>{user.name}</td>
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


export default DataItem;