import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Parent from './components/Parent';
import axios from 'axios';

// function App() {

//   return (
//     <div>
//       <CustomInput placeholder='name' type='text' />
//       <CustomInput placeholder='job title' type='text' />
//       <CustomInput placeholder='age' type='number' />
//       <Parent />
//     </div>
//   );
// }

// function CustomInput(props) {
//   const [value, setValue] = useState('');
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <input
//       type={props.type}
//       value={value}
//       placeholder={props.placeholder}
//       onChange={handleChange}
//     />
//   )
// }

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data = await response.data;
        setData(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )

}

export default App;
