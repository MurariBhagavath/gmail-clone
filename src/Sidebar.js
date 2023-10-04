import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from "./SidebarOption";
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone"
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";



function Sidebar() {
    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>Compose</Button>
            <SidebarOption Icon={InboxIcon} number={54} title="Inbox" selected />
            <SidebarOption Icon={StarIcon} number={54} title="Starred" />
            <SidebarOption Icon={AccessTimeIcon} number={54} title="Snoozed" />
            <SidebarOption Icon={LabelImportantIcon} number={54} title="Important" />
            <SidebarOption Icon={NearMeIcon} number={54} title="Sent" />
            <SidebarOption Icon={NoteIcon} number={54} title="Drafts" />
            <SidebarOption Icon={ExpandMoreIcon} number={54} title="More" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
