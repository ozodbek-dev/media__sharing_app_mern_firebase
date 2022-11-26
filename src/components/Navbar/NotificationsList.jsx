import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseIcon from '@mui/icons-material/Close';
import { NotificationsListContainer,Button } from "./NavbarStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotificationCard from "./NotificationCard";


export default function NotificationsList({active, setActive}) {

  return (
    <NotificationsListContainer active={active}>
      <div className="header">
        <Button className="close_btn" >
          <CloseIcon/>
        </Button>
        <h3>Notification</h3>
        <Link to="/settings/notification">
          <Button >
            <SettingsOutlinedIcon />
          </Button>
        </Link>
      </div>

      <ul className="list">
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>

      </ul>
    </NotificationsListContainer>
  );
}
