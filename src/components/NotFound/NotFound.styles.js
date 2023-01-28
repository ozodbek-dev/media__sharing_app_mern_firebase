import styled from 'styled-components';

export const NotFoundContainer = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
left:0;
top:0;
background-color: white;
display: grid;
place-content: center;
place-items: center;
z-index: 100000000;
img{
  width: 60%;
}
a{
  font: 600 2rem sans-serif;
  padding: 1rem 2rem;
  color:white;
  margin:1rem;
}
@media screen and (max-width:500px){
  img{
    width: 90%;
  }
}
`