import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(1)
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(function() {
    getData();
  }, [index])

 const filteredData = userData.filter(function(item){
  if(search == ""){
    return true
  }
  return item.author.toLowerCase().includes(search.toLowerCase());
 })
  return (
    <div className="bg-black min-h-screen text-white p-6">


      <input
        type="text"
        placeholder="search data"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-white text-white bg-transparent px-4 py-2 ml-5 rounded-lg"
      />

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {filteredData.length > 0 ? (
          filteredData.map((elem, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-4 rounded-lg shadow-lg w-64"
            >
              <img
                src={elem.download_url}
                alt={elem.author}
                className="w-full h-64 object-cover rounded-lg"
              />

              <h2 className="text-center mt-3 font-semibold">
                {elem.author}
                
              </h2>
            </div>
          ))
        ) : (
          <h2 className="text-xl font-bold">No matching data found.</h2>
        )}
      </div>
     <div className="m-8 p-7 flex justify-between gap-10 ">
       <button
        onClick={()=>{
          if(index>1)
          setIndex(index - 1)
          
        }}
        className="bg-yellow-700 px-6 py-3 rounded-lg font-bold ">
        
      prev
      </button>
      <button
        onClick={()=>{
          setIndex(index + 1)
        }}
        className="bg-yellow-700 px-6 py-3 rounded-lg font-bold ">
          Next
      </button>
     </div>
    </div>
  );
};

export default App;