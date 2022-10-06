
import './App.css';
import React, {useState, useEffect}  from 'react';

function App() {
  // functional component requires the use of state

  const [returnedData, setreturnedData] = useState(['hii theree'])

  
  const getData = async (url) => {
    const newData = await fetch(url, {
      // fetch is a built in instead of axios
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    console.log(newData)
    setreturnedData(newData.result)
  }


  return (
    <div className="App">
      <button onClick={() => getData('/quit')}>
        Click
      </button>
      {returnedData}
    </div>
  );
}

export default App;
