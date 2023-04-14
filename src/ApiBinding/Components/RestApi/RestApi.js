// import React from 'react';
// import ChildComponent from '../RestApi/ChildComponent';

// const DATA ={

 
//   names: 'John Doe',
//   age: 30,
//   email: 'johndoe@example.com'
// };

// function RestApi()
// {
//   return (
//     <div>
     
//    <form>
//     <label>Name</label>
//     <label>Age</label>
//    </form>
//     </div>
//   );
// }

// export default RestApi;
import React, { useState } from 'react';
import "./RestApi.css";

function RestApi() {
  const [formData, setFormData] = useState({});
  const [type, setType] = useState('REST');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
<>


    <form onSubmit={handleSubmit} className='container'>
      
     <button className='save'>Save</button>
     <button className='cancel'>Cancel</button>
<br/>
      <label>
        Name:
        <input type="text" name="text"  />
      </label>
<br/>
<br/>

      <label>
        Web service URL:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      
    <br/>
    <br/>



      <label>
        Code:
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <br/>
      <br/>

      <label>
        Retries on call failure:
        <input type="integer" name="integer" onChange={handleChange} />
      </label>
      <br/>
      <br/>

      <label>
        Description:
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <br/>
      <br/>


      <label>
       Type:
       <input type="text" name="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <br/>
      <br/>


      <label>
       Package:
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <br/>
      <br/>

    </form>
<br/>
    <div className='containerTwo'>

    </div>
    </>
  );
}

export default RestApi;
