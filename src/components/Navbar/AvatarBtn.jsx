import React from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  cursor: pointer;
`;

export default function AvatarBtn({img}) {
  return (
    <AvatarContainer>
      <img src={img} alt="" />
    </AvatarContainer>
  )
}
