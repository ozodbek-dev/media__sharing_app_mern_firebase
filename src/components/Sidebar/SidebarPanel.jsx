import React from 'react'
import { SidebarPanelContainer } from './SidebarStyles';
import allLinks from '../../assets/sidebar/Links';
import { NavLink } from 'react-router-dom';

export default function SidebarPanel({active}) {
  return (
    <SidebarPanelContainer active = {active}>
      <div className="list">
        {
          allLinks.first.map(item=>(
            <NavLink  key={item.title} to={item.link} >
              <span className="icon">{item.icon}</span>
              <span className="text">{item.title}</span>
            </NavLink>
          ))
        }
         <NavLink  key={allLinks.second[0].title} to={allLinks.second[0].link} >
              <span className="icon">{allLinks.second[0].icon}</span>
              <span className="text">{allLinks.second[0].title}</span>
            </NavLink>
        
        </div>
    </SidebarPanelContainer>
  )
}
