import React from 'react'

const API = () => {
   async function getdata() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    console.log(data);
    
  }
  return (
    <div>
      <button onClick={()=>{
        getdata();
        
      }}>Get Data</button>
    </div>
  )
}

export default API
