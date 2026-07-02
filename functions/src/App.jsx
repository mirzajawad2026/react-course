import React from 'react'

const App = () => {
  function input(val) {
    console.log(val);
    
  }
   
  return (
    <div>
      
      <button onClick={function(){
        console.log("increase");
        
      }}>Increase</button>
      <input type="text" onChange={function(elem){
        console.log(elem.target.value); // this way use to call the function
        
      }} />
    </div>
  )
}

export default App
