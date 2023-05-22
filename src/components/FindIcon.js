const FindIcon = ({ name, cover, rating, genre }) => {
    const style = {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "20px",
        marginBottom: "20px",
    };
    const iconStyle = {
        marginLeft: "10px",
    };
    const imgBoxStyle = {
        height: "200px",
        width: "300px",
        position: " relative",
        overflow: "hidden",
    };
    return (
        <div style={style}>
            <div style={imgBoxStyle}>
                <img src={cover} alt="cover" width="100%" height="100%" object-fit="cover" />
            </div>
            <div style={iconStyle}>
                <h3>{name}</h3>
                <p>{rating}</p>
                <p>{genre}</p>
                <p>Add to list</p>
            </div>
        </div>
    );
};
export default FindIcon;
