import { use } from "react";

import SinglePlayer from "../singlePlayers/SinglePlayer";

const AvailablePlayers = ({
  fetchData,
  setAvailableBalance,
  availableBalance,
}) => {
  const playerData = use(fetchData);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-3 mx-5">
        {playerData.map((player) => (
          <SinglePlayer
            player={player}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;