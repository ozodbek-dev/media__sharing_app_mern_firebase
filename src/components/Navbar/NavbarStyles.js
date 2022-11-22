import styled from 'styled-components'
import { d_flex } from '../../Mixins'

export const Container = styled.div`
  background-color: var(--main_bg_color);
  padding: 0px 16px;
  position: fixed;
  width: 100%;
  top:0;
  left:0;
  ${d_flex("row", "", "center", "space-between")};
  border-bottom:1px solid var(--btn_color);
  
`

export const Brand = styled.div`
  background-color: var(--main_bg_color);
  padding:18px 14px 18px 16px;
  ${d_flex("row", "", "center", "space-between")};
  
  span{
    color:white;
    font-size: 23px;
    font-family: 'Teko', sans-serif;letter-spacing: -.5px;
  }
  svg{
    font-size: 30px;
    color:var(--red_color);
    margin-right: 8px;
  }
`

export const Button = styled.button`
width: 40px;
height: 40px;
${d_flex("", "", "center", "center")};
border-radius: 50%;
padding: 10px;
background-color: transparent;
color:white;
cursor: pointer;
transition: all .3s ease;
svg{
  font-size: 25px;
}
&:hover{
  background-color: var(--btn_color);
}
`

export const Right = styled.div`
  ${d_flex("row", "", "center", "space-between")};
  background-color: transparent;
 
  `
export const Middle = styled.div`
position: relative;
width: 50%;
  ${d_flex("row", "", "center", "center")};
  button.mobile_search_btn{
  display: none;
  
}
@media screen and (max-width:700px){
  &{
    button.mobile_search_btn{
      display: block;
    }
  }
}
  `
export const Left = styled.div`
${d_flex("row", "", "center", "space-between")};

button{
  margin-left: 15px;
}
button.notification{
  position: relative;
}
.badge{
  position:absolute;
  background-color: var(--red_color);
  padding: 1px 2px;
  font-size: 10px;
  border-radius: 30%;
  color:var(--main_text_color);
  top: 5px;
  right: 5px;
}


`