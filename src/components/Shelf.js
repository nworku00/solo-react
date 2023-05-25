import style from "./SearchIcon.module.css";
const Shelf = (props) => {
    const shelf = {
        backgroundColor: "saddlebrown",
        padding: "20px",
        marginTop: "30px",
    };
    const secStyle = {
        backgroundColor: "grey",
        border: "2px solid black",
        height: "200px",
        width: "800px",
        display: "flex",
    };

    return (
        <div style={shelf}>
            <div style={secStyle}>
                <div className={style.shelf}>
                    <div className={style.title}>Vidya 2 :even more</div>
                </div>
                <div className={style.shelf}>
                    <div className={style.title}></div>
                </div>
                <div className={style.shelf}>
                    <div className={style.title}></div>
                </div>
                <div className={style.shelf}>
                    <div className={style.title}></div>
                </div>
                <div className={style.shelf}>
                    <div className={style.title}></div>
                </div>
            </div>
        </div>
    );
};
export default Shelf;
