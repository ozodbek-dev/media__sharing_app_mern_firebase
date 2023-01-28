import styled from 'styled-components';
import { d_flex } from '../../Mixins';

export const VideoContainer = styled.div`
max-width: 100%;

 
 ${
  d_flex('','','center','space-between')
 }
 @media screen and (max-width:1200px){
  flex-direction: column;
 }
 
 `
