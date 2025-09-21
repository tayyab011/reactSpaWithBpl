
import userPngImg from "../../assets/user 1.png";
import flag from "../../assets/report 1.png";
import { useState } from "react";
const SinglePlayer = ({ player, setAvailableBalance, availableBalance }) => {
  const [isSelected, setSelected] = useState(false);

 

  return (
    <div className="card bg-base-100  shadow-lg my-5 mx-auto ">
      <figure>
        <img
          className="w-[300px] h-[300px] object-cover "
          src={player.player_image}
          alt="players"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <img className="bg-white" src={userPngImg} alt="" />
          <h2 className="card-title">{player.player_name}</h2>
        </div>
        <div className="flex items-center justify-between mt-5 border-b-1 pb-2 border-gray-400">
          <div className="flex items-center gap-2">
            <img className="bg-white" src={flag} alt="" />
            <span>{player.player_country}</span>
          </div>
          <div className="badge badge-md bg-gray-300">
            {player.playing_role}
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 ">
          <div className="flex items-center gap-2">
            <span>Rating</span>
          </div>
          <h3 h3 className="">
            {player.rating}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-5 ">
          <div className="flex items-center gap-2">
            <span>{player.batting_style}</span>
          </div>
          <h3 h3 className="">
            {player.bowling_style}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-5 ">
          <div className="flex items-center gap-2">
            <span>Price: ${player.price}</span>
          </div>
          <button
            disabled={isSelected}
            onClick={() => {
              const playerprice =player.price;
              if (availableBalance < playerprice) {
                alert("not suficient balance");
                return
              } else {
              
                  setSelected(true);
                  setAvailableBalance(availableBalance - player.price);
              }
            }}
            className="btn"
          >
            {" "}
            {isSelected ? "selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;