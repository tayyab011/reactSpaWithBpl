import React, { Suspense, useState } from 'react';

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';


const fetchData=fetch("/players.json").then((res) => res.json())


const App = () => {
  const [toggle,setToggle]=useState("fuck");
  return (
    <div className="">
      <Navbar />

      <div className="max-w-[1200px] mx-auto my-4 flex justify-between items-center">
        <div>
          <h2 className="font-bold ">Available Players</h2>
        </div>
        <div className="">
          <button
            onClick={() => setToggle("fuck")}
            className={`py-3 px-6 ${
              toggle ==="fuck" && "bg-amber-300"
            } rounded-l-3xl  cursor-pointer `}
          >
            available
          </button>
          <button
            onClick={() => setToggle("you")}
            className={`py-3 px-4 rounded-r-3xl ${
              toggle ==="you" ? "bg-amber-300" :null
            } border-1 border-gray-200 cursor-pointer`}
          >
            selected <span>0</span>
          </button>
        </div>
      </div>

      {toggle ==="fuck" ? (
        <Suspense fallback={<h1>loading...</h1>}>
          <AvailablePlayers fetchData={fetchData} />
        </Suspense>
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default App;