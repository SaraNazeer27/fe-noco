import React, {useState} from 'react';



const EventList = (props) =>{

    return(
        <>
        { props.addedEvents && props.addedEvents.map(addedEvent=>(
<div className="token-flex">
        <div className="token-box">
          {addedEvent.name}
        </div>
        &nbsp;&nbsp;&nbsp;
        
      </div>
        ))}
          
       </> 
    )
}

export default EventList;