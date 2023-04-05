import React,{useState} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import './MultipleClick.css';


const MultipleClick = () => {

const data = [
  {Country: 'This Page', value: '1'},
  {Country: 'Current User', value: '2'},
  {Country: 'Do a search for', value: '3'},
  {Country: 'Get an option', value: '4'},
  {Country: 'Get data from an external API', value: '5'},
  {Country: 'Calculate formula', value: '6'},
  // <hr></hr>,
  {Country: 'Signup/Login Popup', value: '7'},
  {Country: 'index', value: '8'}, 
  // <hr></hr>,
  {Country: 'App Text(?)', value: '9'},
  {Country: 'Arbitary text', value: '10'},
  {Country: 'Arbitary date/time', value: '11'},
  {Country: 'Website home URL', value: '12'},
  {Country: 'This url', value: '13'},
  {Country: 'Current language', value: '14'},
  {Country: 'Website admin email', value: '15'},
  {Country: 'Current date/time', value: '16'},
  {Country: 'Current geographic position', value: '17'},
  {Country: 'Current page width', value: '18'},
  {Country: 'Current page scrolling position', value: '19'},
  {Country: 'Page loaded abovefold', value: '20'},
  {Country: 'Page loaded(entire)', value: '21'},
  {Country: "Isn't live version", value: '22'},
  {Country: 'App version', value: '23'},
  {Country: 'Get data from page URL', value: '24'},


]

const [options] = useState(data);

  return (
    <div className='multi'>
      <Multiselect 
      options={options} displayValue="Country"/>
    </div>
  )
}

export default MultipleClick;
