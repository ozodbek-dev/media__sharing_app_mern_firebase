import { Link } from "react-router-dom";
import styled from "styled-components";
import { d_flex } from "../../../Mixins";

export const SignInContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;
`;

export const FormContainer = styled.form`
  min-width: 300px;
  width: 50%;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid var(--main_shadow_color_2);
  background-color: var(--main_bg_color);
  
  p{
    color:var(--main_text_color_2);
    font: 300 1rem cursive;
    padding: 10px 0;
    a{
      color:var(--blue_color)
    }
  }
  @media screen and (max-width:768px){
    width: 100%;
    height: 100%;
    ${d_flex('column','','flex-start','space-between')};
  }
`;

export const SignInBtnContainer = styled(Link)`
  ${d_flex("row", "", "center", "flex-start")};
  padding: 5px 10px;
  max-width: 100px;
  span {
    margin-left: 5px;
  }
  border: 0.1px solid var(--btn_hover_color);
  color: var(--blue_color);
  font: 600 14px sans-serif;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--btn_hover_color);
  }
  border-radius: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  input {
    width: 100%;
    padding: 1rem 4rem;
    padding-right: 2rem;
    background-color: var(--main_input_color);
    color: var(--main_text_color);
    border: 1px solid var(--main_input_color);
    font: 500 1rem cursive;
    border-radius: 10px;
    &:focus {
      border: 1px solid var(--btn_hover_color);
      box-shadow: 0 0 2px var(--main_input_color);
       & ~ svg, & ~ span svg{
        transform: scale(1.1);
        color: var(--blue_color);
      }
    }
  }
  span {
    cursor: pointer;
    position: absolute;
    font-size: 30px;
    right: 1rem;
    top: 10px;
    svg {
      transition: all 0.1s ease-in-out;
    }
    &:active {
      svg {
        transform: scale(1.3);
      }
    }
    transition: all 0.2s ease-in-out;
    svg {
      color: var(--main_text_color);
    }
  }
  & > svg {
    position: absolute;
    font-size: 30px;
    left: 1rem;
    top: 10px;
    color: var(--main_text_color);
    transition: all 0.2s ease-in-out;
  }
  input[type="submit"] {
    border: none;
    outline: none;
    font: 600 1.2rem "sans-serif";
    transition: all 0.2s ease-in;
    background-color: var(--btn_hover_color);
    &:hover, &:active {
      background-color: var(--main_input_color);
      cursor: pointer;
    }
  }
  @media screen and (max-width:768px){
    input{
      font-size: 2rem;
    }
    & > svg {
    position: absolute;
    font-size: 40px;
    left: 1rem;
    top: 1rem;
    color: var(--main_text_color);
    transition: all 0.2s ease-in-out;
  }
  span {
    font-size: 40px;
    right: 1rem;
    top: 1rem;
    svg {
      transition: all 0.1s ease-in-out;
    }
    &:active {
      svg {
        transform: scale(1.3);
      }
    }
    transition: all 0.2s ease-in-out;
    svg {
      color: var(--main_text_color);
    }
  }
  }
`;

export const AuthMethodBtnContainer = styled.button`
  font: 600 1.2rem "sans-serif";
  transition: all 0.2s ease-in;
  background-color: var(--btn_hover_color);
  border-radius: 4px;
  padding: 10px 0;
  svg {
    color: var(--main_text_color);
    font: 600 2rem sans-serif;
    transition: all .1s ease-in-out;
  }
  &:hover {
    background-color: var(--main_input_color);
    cursor: pointer;
    svg {
 transform: scale(1.1);
  }
  }
`;

export const SignInUpMethodsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
`;
