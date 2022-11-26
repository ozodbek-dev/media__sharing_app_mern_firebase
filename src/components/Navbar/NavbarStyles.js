import styled from "styled-components";
import { d_flex } from "../../Mixins";

export const Container = styled.div`
  background-color: var(--main_bg_color);
  padding: 0px 16px;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index:900;
  top: 0;
  left: 0;
  ${d_flex("row", "", "center", "space-between")};
  border-bottom: 1px solid var(--btn_color);
  /* overflow: hidden; */
`;

export const Brand = styled.div`
  background-color: transparent;
  padding: 18px 14px 18px 16px;
  ${d_flex("row", "", "center", "space-between")};

  span {
    color: white;
    font-size: 23px;
    font-family: "Teko", sans-serif;
    letter-spacing: -0.5px;
  }
  svg {
    font-size: 30px;
    color: var(--red_color);
    margin-right: 8px;
  }
  @media screen and (max-width:430px){
   padding: 0;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  ${d_flex("", "", "center", "center")};
  border-radius: 50%;
  padding: 10px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  svg {
    font-size: 25px;
  }
  &:hover {
    background-color: var(--btn_color);
  }
`;

export const Right = styled.div`
  ${d_flex("row", "", "center", "space-between")};
  background-color: transparent;
  /* @media screen and (max-width:430px){
    &>button{
      display: none;
    }
  } */

`;
export const Middle = styled.div`
  position: relative;
  width: 50%;
  ${d_flex("row", "", "center", "center")};
  button.mobile_search_btn {
    display: none;
  }
  @media screen and (max-width: 700px) {
    widh: 100%;
    button.mobile_search_btn {
      display: block;
    }
  }
  @media screen and (max-width:430px){
    &>button{
      display: none;
    }
  }
`;
export const Left = styled.div`
  ${d_flex("row", "", "center", "space-between")};

  button {
    margin-left: 15px;
  }
  button.notification {
    position: relative;
  }
  .badge {
    position: absolute;
    background-color: var(--red_color);
    padding: 1px 2px;
    font-size: 10px;
    border-radius: 30%;
    color: var(--main_text_color);
    top: 5px;
    right: 5px;
  }
  @media screen and (max-width:430px){
    &>button.notification{
      display: none;
    }
  }
`;

export const AddVideoContainer = styled.ul`
  width: 200px;
  position: absolute;
  z-index: 1000;
  background-color: var(--main_bg_color_2);
  border-radius: 15px;
  border-top-right-radius: 0;
  padding: 5px;
  top: 40px;
  right: 15px;
  transform-origin: top right;
  transition: all 0.3s ease;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
  .list {
    ${d_flex("column", "", "flex-start", "")}
    padding:15px 0;
    a {
      width: 100%;
      ${d_flex("", "", "center", "flex-start")}
      border-radius: 10px;
      color: var(--main_text_color);
      font-family: sans-serif;
      font-size: 15px;
      margin-bottom: 5px;
      svg {
        margin-right: 20px;
      }
      padding: 5px 10px;
      &:hover {
        background-color: var(--btn_color);
      }
    }
  }
 
`;

export const NotificationsListContainer = styled.section`
  background-color: var(--main_bg_color_2);
  max-height: 80vh;
  width: 500px;
  position: absolute;
  padding: 10px 20px;
  right: 20px;
  top: 35px;
  border-radius: 15px;
  border-top-right-radius: 0;
  transform-origin: top right;
  transition: all 0.3s ease-in-out;
  transform: scale(${({ active }) => (active ? 1 : 0)});
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    &-track {
      background: transparent;
    }
    &-thumb {
      display: none;
      background: var(--active_btn_color);
      border-radius: 8px;
    }
  }
  &:hover {
    ::-webkit-scrollbar-thumb {
      display: block;
    }
  }
  .header {
    ${d_flex("", "", "center", "space-between")};
    border-bottom: 1px solid var(--active_btn_color);
    padding: 5px 0px;
    h3,
    svg {
      color: var(--main_text_color);
      font-weight: 400;
    }
    &>button.close_btn{
      display: none;
    }
  }
  @media screen and (max-width:700px){
    position:fixed;
    width:100vw;
    height: 100vh;
    left:0;
    top:0;
    border-radius:0;
    .header{ &>button.close_btn{
     display: flex;
     svg{
      color:var(--red_color);
      font-weight: 600;
     }
    }}
}
`;

export const AccountDetailsContainer = styled.div`

  position: absolute;
  background-color: var(--main_bg_color_2);
  width: 300px;
  right: 30px;
  border-radius: 15px;
  border-top-right-radius: 0;
  padding: 10px 20px;
  height: 80vh;
  overflow: hidden;
  transition: transform .3s ease-in-out;
  transform-origin: top right;
  transform: scale(${({active})=>active?1:0});

  .profile {
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    background-color: var(--active_btn-color);
    z-index: 999;
    border-bottom: 1px solid var(--active_btn_color);
    padding: 10px 20px;
    ${d_flex("", "", "center", "flex-start")}
    .info {
      margin-left: 20px;
      & > p {
        color: var(--main_text_color);
      }
      a p {
        font-size: 13px;
        padding: 5px 0;
        color: var(--blue_color);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .content{
    margin-top: 60px;
    ${d_flex('column','','','')}
    max-height: calc(80vh - 60px);
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 10px;
    &-track {
      background: transparent;
    }
    &-thumb {
      display: none;
      background: var(--active_btn_color);
      border-radius: 8px;
    }
  }
  &:hover {
    ::-webkit-scrollbar-thumb {
      display: block;
    }
  }
    .list {
    ${d_flex("column", "", "flex-start", "")}
    padding:15px 0;
    &:not(:last-child) {
      border-bottom: 1px solid var(--active_btn_color);
    }
    a {
      width: 100%;
      ${d_flex("", "", "center", "flex-start")}
      border-radius: 10px;
      color: var(--main_text_color);
      font-family: sans-serif;
      font-size: 15px;
      margin-bottom: 5px;
      svg {
        margin-right: 20px;
      }
      padding: 5px 10px;
      &:hover {
        background-color: var(--active_btn_color);
      }
    }
  }
  }

  @media screen and (max-width:700px){
    position:fixed;
    width:100vw;
    height: 100vh;
    left:0;
    top:0;
    border-radius:0;
    z-index:1001;
    .profile{
      justify-content: space-between;
    }
    .header{ &>button.close_btn{
     display: flex;
     svg{
      color:var(--red_color);
      font-weight: 600;
     }
    }

  }}
  
`;
