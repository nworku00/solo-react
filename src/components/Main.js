import Shelf from "./Shelf";
import Side from "./Sidebar";
import Find from "./Find";
import Finished from "./Finished";
import Playing from "./Playing";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";


const Main = () => {

    const [games, setGames] = useState([]);
    const [playingGames, setPlayingGames] = useState([]);
    const [finishedGames, setFinishedGames] = useState([]);

    const moveToPlaying = (game) => {
        setGames(games.filter((g) => g.id !== game.id));
        setPlayingGames([...playingGames, game]);
    };

    const moveToFinished = (game) => {
        setPlayingGames(playingGames.filter((g) => g.id !== game.id));
        setFinishedGames([...finishedGames, game]);
    };
    const moveToFinished2 = (game) => {
        setGames(games.filter((g) => g.id !== game.id));
        setFinishedGames([...finishedGames, game]);
    };
    const removeGame = (game) => {
        setPlayingGames(playingGames.filter((g) => g.id !== game.id));
    }
    const removeFinishedGame = (game) => {
        setFinishedGames(finishedGames.filter((g) => g.id !== game.id));
    }
    const style = {
               display: "flex",
                 justifyContent:"center"
             };
    return (
        <div style={style}>
            <Side />
            <Routes>
                <Route path="/*" element={<Home /> } />
                <Route
                    path="/find"
                    element={
                        <Find
                            games={games}
                            setGames={setGames}
                            moveToPlaying={moveToPlaying}
                            moveToFinished2={moveToFinished2}
                        />
                    }
                />
                <Route
                    path="/playing"
                    element={<Playing
                        games={playingGames}
                        moveToFinished={moveToFinished}
                        removeGame={removeGame}
                    />}
                />
                <Route path="/finished" element={<Finished games={finishedGames} removeFinishedGame={removeFinishedGame}/>} />
                <Route path="/shelf" element={<Shelf/>} />
            </Routes>
        </div>
    );
};
// const Main = (props) => {
//     const style = {
//         display: "flex",
//         justifyContent:"center"
//     };
//     return (
//         <div style={style}>
//             <Side />
//             <Routes>
//                 <Route path="/find" element={<Find />} />
//                 <Route path="/playing" element={<Playing />} />
//                 <Route path="/finished" element = {<Finished/>} />
//             </Routes>
//         </div>
//     );
// };

export default Main;
