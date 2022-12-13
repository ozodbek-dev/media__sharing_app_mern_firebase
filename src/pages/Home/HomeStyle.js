import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
`;
export const MediaList = styled.div`
  padding: 20px 50px;
  width: 100%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;
