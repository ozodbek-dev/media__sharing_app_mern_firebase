import React from "react";
import { NavLink } from "react-router-dom";
import allLinks from "../../assets/sidebar/Links";
import { Container, Wrapper, Content } from "./SidebarStyles";

export default function Sidebar({ active }) {
  return (
    <Container active={active}>
      <Wrapper>
        <div className="list">
          {allLinks.first.map((item) => (
            <NavLink 
            key={item.title} to={item.navlink}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </NavLink>
          ))}
        </div>

        <div className="list">
          {allLinks.second.map((item) => (
            <NavLink 
            to={item.navlink} key={item.title}  >
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </NavLink>
          ))}
        </div>

        <div className="list">
          <h3>Explore</h3>
          {allLinks.explore.map((item) => (
            <NavLink to={item.navlink}   key={item.title} >
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </NavLink>
          ))}
        </div>

        <div className="list" >
          <h3>Explore</h3>
          {allLinks.last.map((item) => (
            <NavLink to={item.navlink}  key={item.title} >
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </NavLink>
          ))}
        </div>

        <div className="sidebarFooter">
          <p>AboutPressCopyrightContact usCreatorAdvertiseDevelopers</p>
          <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>

          <p>© {new Date().getFullYear()} Google LLC</p>
        </div>
      </Wrapper>
    </Container>
  );
}
