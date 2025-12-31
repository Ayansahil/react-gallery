import React, {useState } from "react";
import axios from "axios";

const App = () => {

const [allData, setAllData] = useState([])

  const harryData = async () => {
    const response = await axios.get("https://potterapi-fedeperin.vercel.app/en/characters");
   setAllData(response.data)
  };

  

  return (
   <div className="min-h-screen bg-black text-3xl text-amber-700">



      <button onClick={harryData}>GET DATA</button>
      {allData.map(function(elem,idx){
        return <h1 key={idx}>{elem.fullName}</h1>; 
      })}
    </div>
  );
}


export default App;
