import { Button } from "@mui/material";
import Dropdown from "./Dropdown";
import { useState } from "react";
const FindIcon = ({ name, cover, rating, genre, whichList, handleAdd, handleAdd2, removeGame, removeFinishedGame }) => {
    const [personalRating, setPersonalRating] = useState('')
    const style = {
        display: "flex",
        flexWrap:"wrap",
        marginTop: "20px",
        marginBottom: "20px",
        border: '5px solid black',
        
    };
    const iconStyle = {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: "20px",
        marginRight: "10px",
        width:"200px"
    };
    const imgBoxStyle = {
        height: "240px",
        width: "300px",
        position: " relative",
        overflow: "hidden",
    };
    const rateStyle = {
        marginBottom:'-5px'
    }
    const handlePersonalRating = (e) => {
        setPersonalRating(e.target.value)
    }
    const buttonRender = () => {
        if (whichList === 'findList') {
            return <>
                <Button variant="contained" onClick={handleAdd}>Add to Play List</Button>
                <Button variant="contained" onClick={handleAdd2}>Add to Finished List</Button>
            </>
        } else if ( whichList  === 'playList') {
            return <>
             <Button variant="contained" onClick={handleAdd}>Add to Finished List</Button>
            <Button variant="contained" onClick={removeGame}>Remove Game</Button>
            </>
        } else {
            return <>
                <Button variant="contained" onClick={removeFinishedGame}>Remove Game</Button>
                <Dropdown handlePersonalRating={handlePersonalRating} />
            </>
        }
    }
    return (
        <div style={style}>
            <div style={imgBoxStyle}>
                <img src={cover} alt="cover" width="100%" height="100%" object-fit="cover" />
            </div>
            <div style={iconStyle}>
                <h3 style={rateStyle}>{name}</h3>
                <p style={rateStyle}>Rating: {rating}</p>
                <p style={rateStyle}>Personal Rating: {personalRating}</p>
                <p>{genre}</p>
            {
                buttonRender()
            }
            </div>
        </div>
    );
};
export default FindIcon;
