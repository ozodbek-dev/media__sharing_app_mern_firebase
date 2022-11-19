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
  --main_text_color:#fff;
  --main_text_color_2:rgb(228, 227, 229);
  --btn_color:272727;
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
  }
  
`

export default GlobalStyles