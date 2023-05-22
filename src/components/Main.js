import Shelf from "./Shelf";
import Side from "./Sidebar";
import Find from "./Find";
import { Routes, Route } from "react-router-dom";

const Main = (props) => {
    const style = {
        display: "flex",
        justifyContent:"center"
    };
    return (
        <div style={style}>
            <Side />
            <Routes>
                <Route path="/find" element={<Find />} />
            </Routes>
        </div>
    );
};

export default Main;
