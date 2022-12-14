import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border:none;
  list-style: none;
  text-decoration: none;
}

:root{
  --main_bg_color:rgb(15, 15, 15);
  --main_bg_color_2:rgb(40, 40, 40);
  --main_text_color:#fff;
  --main_shadow_color:rgba(255,255,255,.3);
  --main_text_color_2:rgb(136, 136, 136);
  --btn_color:rgb(34, 34, 34);
  --btn_color_2:rgba(70,70,70,.8);
  --btn_hover_color:rgba(100,100,100,.8);
  --active_btn_color:#3d3d3d;
  --search_input_color:rgb(18, 18, 18);
  --red_color:#bc0c0c;
  --blue_color:#639be4;
}
.light-theme{
  --main_bg_color:rgb(255, 255, 255);
  --main_text_color:#0f0f0f;
  --main_text_color_2:rgb(81, 81, 81);
  --btn_color:rgb(217, 217, 217);
  --active_btn_color:rgb(230, 230, 230);
  --search_input_color:rgb(255, 255, 255);
  --red_color:#bc0c0c;
  --blue_color:#639be4;
}

  body{
    background-color: var(--main_bg_color);
    font-family: sans-serif;
  }
  .btn-hover:hover{
    background-color:var(--btn_color) ;
  }
  .content{
    display: flex;
  }
  .activeLink{
    background-color:red!important;
  }
`

export default GlobalStyles