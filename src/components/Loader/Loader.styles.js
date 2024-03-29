import styled from 'styled-components'

export const LoaderContainer = styled.div`
display: grid;
place-items: center;
background-color: var(--main_bg_color);
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid var(--main_text_color);
  border-radius: 50%;
  animation: lds-ring .8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--main_text_color) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.2s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.1s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;

