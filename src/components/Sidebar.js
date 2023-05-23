import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Side = (props) => {
    const style = {
        position: "absolute",
        left: '0px',
        height: "100vh"
    }
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    return (
        <Sidebar style={style}>
            <Menu >
                <MenuItem
                    icon={<MenuOutlinedIcon />}
                    onClick={() => {
                        collapseSidebar();
                    }}
                    style={{ textAlign: "center" }}>
                </MenuItem>
                <SubMenu label="User" icon = {< AccountBoxIcon/>} >
                    <MenuItem icon= {< LoginIcon/>}> Log in </MenuItem>
                    <MenuItem icon= {< AssignmentIcon/>}> Sign Up </MenuItem>
                </SubMenu>
                <MenuItem icon={<SearchIcon />} component={<Link to="/find" />}> Find Game</MenuItem>
                <MenuItem icon = {<HourglassBottomIcon/>} component={<Link to="/playing" />}> Games to Play</MenuItem>
                <MenuItem icon = {<CheckIcon />} component={<Link to="/finished" />}> Finished Games </MenuItem>
            </Menu>
        </Sidebar>
    );
};
export default Side;
