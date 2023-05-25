import { useState } from "react";
import FindIcon from "./FindIcon";
const Finished = ({games, removeFinishedGame}) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "120px",
        marginRight: "150px",
        justifyContent: "center",
        textAlign:'center'
    };
    const headerStyle = {
        fontSize: "45px",
    }
    return (
        <div style={style}>
            <h2 style = {headerStyle}>Finished Games</h2>
            {games.map((finishedGame, index) => (
                <FindIcon
                    key={ index}
                    name={finishedGame.name}
                    cover={finishedGame.background_image}
                    rating={finishedGame.rating}
                    whichList={'finishedList'}
                    removeFinishedGame={() => removeFinishedGame(finishedGame)}
                />
            ))}
        </div>
    );
};
export default Finished;
