import { Button } from "@mui/material";
const FindIcon = ({ name, cover, rating, genre, whichList }) => {
    const style = {
        display: "flex",
        marginTop: "20px",
        marginBottom: "20px",
        border: '5px solid black'
    };
    const iconStyle = {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        flexGrow: '1',
        marginLeft: "20px",
        marginRight: "10px",
    };
    const imgBoxStyle = {
        height: "200px",
        width: "300px",
        position: " relative",
        overflow: "hidden",
    };
    const buttonRender = () => {
        if (whichList === 'findList') {
            return <Button variant="contained">Add to Play List</Button>
        } else if ( whichList  === 'playList') {
            return <Button variant="contained">Add to Completed List</Button>
        } else {
            return <Button variant="contained">Rate this Game</Button>
        }
    }
    return (
        <div style={style}>
            <div style={imgBoxStyle}>
                <img src={cover} alt="cover" width="100%" height="100%" object-fit="cover" />
            </div>
            <div style={iconStyle}>
                <h3>{name}</h3>
                <p>Rating: {rating}</p>
                <p>{genre}</p>
            {
                buttonRender()
            }
            </div>
        </div>
    );
};
export default FindIcon;
