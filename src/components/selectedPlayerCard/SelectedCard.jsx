import del from "../../assets/Frame.png";
const SelectedCard = ({ player, deletePlayer }) => {
  return (
    <div>
      <div className="border-1 border-gray-300 flex justify-between items-center py-2 px-5 my-3 rounded-xl">
        <div className="flex items-center gap-5 ">
          <div>
            <img
              src={player.player_image}
              alt=""
              className=" w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <h3>{player.player_name}</h3>
            <p> {player.batting_style}</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <img
            onClick={() => deletePlayer(player)}
            src={del}
            alt=""
            className=" hover:scale-75"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
