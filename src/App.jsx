import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/Gallery";

const App = () => {
  const [allData, setAllData] = useState([]);

  useEffect(function () {
    const harryData = async () => {
      const response = await axios.get("https://potterapi-fedeperin.vercel.app/en/characters");
      setAllData(response.data);
    };
    harryData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-3xl text-amber-700">
      <div className="all-cards">
        {allData.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Gallery elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
