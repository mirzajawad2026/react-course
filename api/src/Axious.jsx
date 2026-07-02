import axios from 'axios'
const Axious = () => {

    const getdata = async ()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        console.log(res.data);
                    
    }
  return (
    <div>
      <button onClick={()=>{
        getdata()
      }}>get data by axious</button>
    </div>
  )
}

export default Axious
