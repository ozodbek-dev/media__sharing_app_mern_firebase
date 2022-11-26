import React from 'react'
import styled from 'styled-components'
import { d_flex } from '../../Mixins'
import AvatarBtn from './AvatarBtn'

const NotificationCardContainer = styled.li`
width: 100%;
  ${d_flex('row','','flex-start','space-between')};
  padding:10px;
  margin:10px 0;
  border-radius: 10px;
  transition: all .1s ease-in;
  &>img{
    width: 100px;
  }
  .info{
  ${d_flex('column','','center','')};
  padding: 10px;
  margin: 0 15px;

  .time{
    margin-top:10px ;
    color:var(--main_text_color_2);
    width: 100%;
    text-align: start;
  }
  .title{
    color:var(--main-text_color);
    text-align: start;
  }
    
  }
  &:hover{
    background-color: var(--active_btn_color);
  }
  &:active{
    background-color: var(--btn_color);
  }
  
`

const NotificationCard = () => {
  return (
    <NotificationCardContainer>
      <AvatarBtn/>
      <div className="info">
        <p className="title">Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
        <p className="time">12 minutes ago</p>
      </div>

      <img  src="https://i.ytimg.com/vi/yH-mDJZjonY/hqdefault.jpg" alt="" />
    </NotificationCardContainer>
  )
}

export default NotificationCard