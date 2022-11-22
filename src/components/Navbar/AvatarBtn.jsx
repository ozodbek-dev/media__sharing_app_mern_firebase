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

export default function AvatarBtn() {
  return (
    <AvatarContainer>
      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
    </AvatarContainer>
  )
}
