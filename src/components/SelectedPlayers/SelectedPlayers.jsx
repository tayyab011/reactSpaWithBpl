import SelectedCard from "../selectedPlayerCard/SelectedCard";

/*  */
const SelectedPlayers = ({ purchesedPlayers, deletePlayer }) => {
  console.log(purchesedPlayers);
  return (
    <div className="max-w-[1200px] mx-auto">
      {purchesedPlayers.map((player) => (
        <SelectedCard player={player} deletePlayer={deletePlayer} />
      ))}
    </div>
  );
};

export default SelectedPlayers;