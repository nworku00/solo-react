const Dropdown = ({ handlePersonalRating,}) => {
    const style = {
        backgroundColor: "#1876D1",
        fontSize: '18px',
        color: 'white',
        padding: '8px',
        borderRadius:'5px'
    };
    return (
        <div style={style}>
            <label>
                Rate this Game
                <select onChange={handlePersonalRating}>
                    <option value="1">1</option>

                    <option value="2">2</option>

                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
        </div>
    );
};
export default Dropdown;
