import styled from 'styled-components'
import { d_flex } from '../../Mixins'

export const Container = styled.section`

width: 225px;
position: fixed;
left:${({ active }) => active ? "0" : "-100%"};
background-color: var(--main_bg_color);
 height: calc(100vh - 60px);
 z-index: 900;
top: 60px;
 overflow:hidden;
 border-right:1px solid var(--btn_color);
 transition: all .3s ease;
 @media screen and (max-width:1000px){
  display: flex;
  position: fixed;
  left:${({ active }) => active ? "0" : "-100%"};

 }
`

export const Wrapper = styled.div`
&::-webkit-scrollbar{
  width: 10px;
  &-track{
    background: transparent; 
  }
  &-thumb{
    display: none;
    background: var(--active_btn_color); 
    border-radius: 8px;
    
  }
}
&:hover {   
  ::-webkit-scrollbar-thumb{
    display: block;
}
}
   height: calc(100vh - 60px);
   width: 100%;
   overflow-y:auto;
   padding: 10px 10px;

   .list{
    ${d_flex('column', '', "flex-start", "")}
    padding:15px 0;
    border-bottom: 1px solid var(--btn_color);
    a.activeLink{
     background-color: white;
    }
    a{
      width: 100%;
    ${d_flex('', '', "center", "flex-start")}
    border-radius: 10px;
      color:var(--main_text_color);
      font-family: sans-serif;
      font-size: 15px;
      margin-bottom: 5px;
      svg{
        margin-right:20px;
      }
      padding: 5px 10px;
      &:hover{
        background-color: var(--btn_color);
      }
     
    }
   }

   .sidebarFooter{
    padding: 10px ;
    p:not(:last-child){
      color:var(--main_text_color_2);
      font-size: 13px;
      margin-bottom: 10px;
    }

    p:last-child{
      font-size: 13px;
      color:var(--active_btn_color);
      margin-top: 25px;
    }
   }

   .signIn{
    ${d_flex('column','','flex-start','')};
    color: var(--main_text_color);
    p{
      font: 400 13px sans-serif;
      line-height: 20px;
      margin-bottom: 20px;
    }
    padding: 20px 0;
    padding-left:30px;
   }


`
export const SidebarPanelContainer = styled.div`
position: fixed;
width:70px ;
left:${({ active }) => active ? "0" : "-100%"};
height: 100%;
margin-top: 60px;
transition: all .3s ease-in;
z-index: 900;
background-color: var(--main_bg_color);
.list{
    ${d_flex('column', '', "flex-start", "")}
    padding:8px;
    a{
      width: 100%;
    ${d_flex('column', '', "center", "flex-start")}
    border-radius: 10px;
      color:var(--main_text_color);
      font-family: sans-serif;
      margin-bottom: 5px;
      svg{
        font-size: 22px;
      }
      span.text{
        font-size: 10px;
        padding-top: 5px;
      }
      padding: 5px;
      margin-bottom: 8px;
      &:hover{
        background-color: var(--btn_color);
      }
    }
   }
@media screen and (max-width:1000px){
  width: 70px;
  opacity: 0.2;
pointer-events: auto;
  display:inline-block;
  height: auto;
  position: fixed;
  left:${({ active }) => active ? "0" : "-100%"};
  &:hover{
    opacity: 1;
    pointer-events: auto;
  }
 }
@media screen and (max-width:768px){
  opacity:1;
pointer-events: auto;
  display:block;
  
  position: fixed;
  width: 100%;
  height: 70px;
  border: 1px solid var(--btn_color);
  bottom: 0;
  left:0;
  .list{
    flex-direction: row;
  }
  bottom:${({ active }) => active ? "0" : "-100%"};
 }
 @media screen and (max-height:400px){
  opacity:1;
pointer-events: auto;
  display:block;
  
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left:0;
  .list{
    flex-direction: row;
    a{
      padding:0;
      font-size: 10px;
      svg{
        font-size: 20px;
      }
    }
  }
  bottom:${({ active }) => active ? "0" : "-100%"};
 }
`