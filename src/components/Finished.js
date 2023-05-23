import { useState } from "react";
import FindIcon from "./FindIcon";
const Finished = () => {
    const [finishedGames, setFInishedGames] = useState([]);
    const style = {
        color: "lightblue",
        fontSize: "25px",
    };
    return (
        <div style={style}>
            <h2>Finished Games</h2>
            {finishedGames.map((finishedGame) => (
                <FindIcon
                    name={finishedGame.name}
                    cover={finishedGame.background_image}
                    rating={finishedGame.rating}
                    whichList={'finishedList'}
                />
            ))}
            <FindIcon />
        </div>
    );
};
export default Finished;
