import styled from "styled-components";
export const Container = styled.div`
  margin: 70px 100px;
  padding:10px 50px ;
  border:1px solid red ;
  margin-left: ${({active})=>active ? "225px":"70px"};
  transition: all .3s ease;
  width: 100%;
  @media screen and (max-width:1000px){
    margin: 70px 10px;
  }
  @media screen and (max-width:600px){
   margin:70px 0;
   
  }
`