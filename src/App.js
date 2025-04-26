import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Parent from './components/Parent';

function App() {
  
  return (
    <div>
      <CustomInput placeholder='name' type='text' />
      <CustomInput placeholder='job title' type='text' />
      <CustomInput placeholder='age' type='number' />
      <Parent />
    </div>
  );
}

function CustomInput(props) {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <input
      type={props.type}
      value={value}
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  )
}

export default App;
