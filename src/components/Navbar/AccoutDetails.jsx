import React from "react";
import { Link } from "react-router-dom";
import AvatarBtn from "./AvatarBtn";
import { AccountDetailsContainer, Button } from "./NavbarStyles";
import CloseIcon from '@mui/icons-material/Close';
import accountDetailsObj from '../../assets/AccountDetails/accountDetails'
import allLinks from "../../assets/sidebar/Links";
const AccoutDetails = ({active}) => {
  return (
    <AccountDetailsContainer active={active}>
      <div className="profile">
        <AvatarBtn />
        <div className="info">
          <p>Ozodbek Bakhtiyorov</p>
          <Link to="/">
            <p>Manage Your account</p>
          </Link>
        </div>
        <Button className="close_btn">
          <CloseIcon/>
        </Button>
      </div>

     <div className="content">
     <div className="list">
       { accountDetailsObj.first.map( item=>(
        <Link key={item.title} to={item.link}>
          <span className="icon">{item.icon}</span>
          <span className="text">{item.title}</span>
        </Link>
        ))
       }
      </div>
      <div className="list">
       { accountDetailsObj.second.map( item=>(
        <Link key={item.title} to={item.link}>
          <span className="icon">{item.icon}</span>
          <span className="text">{item.title}</span>
        </Link>
        ))
       }
      </div>
      <div className="list">
       { accountDetailsObj.third.map( item=>(
        <Link key={item.title} to={item.link}>
          <span className="icon">{item.icon}</span>
          <span className="text">{item.title}</span>
        </Link>
        ))
       }
      </div>
      <div className="list">
       { allLinks.last.map( item=>(
        <Link key={item.title} to={item.link}>
          <span className="icon">{item.icon}</span>
          <span className="text">{item.title}</span>
        </Link>
        ))
       }
      </div>
     </div>
    </AccountDetailsContainer>
  );
};

export default AccoutDetails;
