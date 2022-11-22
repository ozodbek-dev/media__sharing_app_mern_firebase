import React from "react";
import styled from "styled-components";
import { d_flex } from "../../Mixins";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WestIcon from '@mui/icons-material/West';

const SearChContainer = styled.div`
  ${d_flex("row", "", "center", "")}
  border-radius: 50px;
  width: 100%;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  position: relative;
  overflow: hidden;
  margin-right: 10px;
  .searchcontent {
    ${d_flex("row", "", "center", "space-between")}
    width: 100%;
    height: 40px;
    .innerSearchBtn {
      display: none;
      height: 40px;
      width: 50px;
      position: absolute;
      left: 0;
      right: 0;
      color: var(--active_btn_color);
      background-color: transparent;
      border-bottom-left-radius: 50px;
      border-top-left-radius: 50px;
      transition: all 0.3s ease-in;
    }
  }
  .outerSearchBtn {
    height: 40px;
    width: 60px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    background-color: var(--btn_color);
    color: var(--main_text_color);
    font-size: 30px;
    border: 1px solid var(--active_btn_color);
    transition: all 0.1s ease;
    cursor: pointer;
    &:hover {
      background-color: var(--active_btn_color);
    }
  }
  input {
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    font-size: 18px;
    background-color: var(--search_input_color);
    border: 1px solid var(--active_btn_color);
    color: var(--main_text_color_2);
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    transition: all 0.05s ease-in;
  }
  input:focus {
    border: 1px solid var(--blue_color);
    padding-left: 50px;
  }
  input:focus + .innerSearchBtn {
    display: block;
  }
  .go_back_btn{
    display: none;
  }
  
  @media screen and (max-width: 700px) { 
      display: none;
      position: fixed;
      left:0;top:0;
      border-radius: none;
      height: 70px;
      width: 100%;  
      padding: 0 30px;
      background-color: var(--main_bg_color);
      z-index: 999;
        border-radius: 0;
        border-bottom:1px solid var(--active_btn_color);
      .go_back_btn{
        display: block;
        ${d_flex("row", "", "center", "center")}
        margin-right: 10px;
        background-color: transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        svg{
          color:var(--main_text_color)
        }
        transition: all .3s ease;
        cursor: pointer;
        &:hover{
          background-color: var(--active_btn_color);
        }
      }
  }
`;

export default function Search() {
  return (
    <SearChContainer>
       <button className="go_back_btn">
          <WestIcon/>
        </button>
      <div className="searchcontent">
        <input type="text" name="search" placeholder="Search" />
        <button className="innerSearchBtn">
          <SearchOutlinedIcon />
        </button>
      </div>
      <button className="outerSearchBtn">
        <SearchOutlinedIcon />
      </button>
    </SearChContainer>
  );
}
