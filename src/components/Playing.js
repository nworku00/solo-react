import { useState } from "react"; 
import FindIcon from "./FindIcon";
const Playing = ({games, moveToFinished, removeGame}) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "200px",
        justifyContent: "center",
        textAlign:'center'
    };
    const headerStyle = {
        fontSize: "35px",
    }
    return (
        < div style={style}>
            <h2 style = {headerStyle}> Games to Play</h2>
            {games.map((game) => (
                <FindIcon
                    name={game.name}
                    cover={game.background_image}
                    rating={game.rating}
                    whichList={'playList'}
                    handleAdd={() => moveToFinished(game)}
                    removeGame={() => removeGame(game)}
                />
            ))}
        </div>
    );
}
export default Playing