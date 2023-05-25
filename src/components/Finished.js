import { useState } from "react";
import FindIcon from "./FindIcon";
const Finished = ({games}) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "100px",
        justifyContent: "center",
        textAlign:'center'
    };
    const headerStyle = {
        fontSize: "45px",
    }
    return (
        <div style={style}>
            <h2 style = {headerStyle}>Finished Games</h2>
            {games.map((finishedGame) => (
                <FindIcon
                    name={finishedGame.name}
                    cover={finishedGame.background_image}
                    rating={finishedGame.rating}
                    whichList={'finishedList'}
                />
            ))}
        </div>
    );
};
export default Finished;
