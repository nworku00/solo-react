import { useState, useEffect } from "react";
import FindIcon from "./FindIcon";
import SearchIcon from '@mui/icons-material/Search';
const Find = ({ }) => {
    const style = {
        display: "flex",
        flexDirection: 'column',
        marginLeft: '200px',
        justifyContent:'center'
    }
    const formStyle = {
        display: "flex",
        justifyContent: "center"
    }
    const barStyle = {
        padding:"10px",
        fontSize: '30px',
        borderRadius: "20px",
    }
    const [games, setGames] = useState([]);
    const [searchInput, setSearchInput] = useState("");


    const url = `https://api.rawg.io/api/games?key=8d5ea0349c9e41fc921cceb8964b0ed0&search=${searchInput}`
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url)
            .then((res) => res.json())
            .then((data) => setGames(data.results));
    };

    return (
        <div style={style}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    placeholder= "Search"
                    value={searchInput}
                    onChange={handleChange}
                    style = {barStyle}
                />
                <SearchIcon sx={{ fontSize: 60 }} onClick={ handleSubmit } />
            </form>
            {games.map((game) => (
                <FindIcon name={game.name} cover={game.background_image} rating={game.rating} />
            ))}
        </div>
    );
};
export default Find;
