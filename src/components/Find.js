import { useState, useEffect } from "react";
import FindIcon from "./FindIcon";
import styles from "./SearchIcon.module.css";

import SearchIcon from "@mui/icons-material/Search";
const Find = ({ games, setGames, moveToPlaying }) => {
    const [searchInput, setSearchInput] = useState("");
    const style = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "200px",
        justifyContent: "center",
    };
    const formStyle = {
        display: "flex",
    };
    const barStyle = {
        padding: "10px",
        fontSize: "25px",
        borderRadius: "10px",
    };
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        const url = `https://api.rawg.io/api/games?key=8d5ea0349c9e41fc921cceb8964b0ed0&search=${searchInput}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setGames(data.results));
    };
    return (
        <div style={style}>
                <h2>Find Games</h2>
            <form style={formStyle}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={handleSearchInput}
                    style={barStyle}
                />
                <SearchIcon
                    sx={{ fontSize: 60 }}
                    onClick={handleSearch}
                    className={styles.searchIcon}
                />
            </form>
            {games.map((game) => (
                <FindIcon name={game.name} cover={game.background_image} rating={game.rating} whichList={'findList'} handleAdd={() => moveToPlaying(game)} />
            ))}
        </div>
    );
};
export default Find;
