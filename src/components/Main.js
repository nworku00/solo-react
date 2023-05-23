import Shelf from "./Shelf";
import Side from "./Sidebar";
import Find from "./Find";
import Finished from "./Finished";
import Playing from "./Playing";
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
                <Route path="/playing" element={<Playing />} />
                <Route path="/finished" element = {<Finished/>} />
            </Routes>
        </div>
    );
};

export default Main;
