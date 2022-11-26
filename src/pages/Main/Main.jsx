import React from 'react'
import { Container } from './MainStyles'
import AllRoutes from '../../routes/Routes'

export default function Main({active}) {
  return (
    <Container active={active}>
      <AllRoutes/>
    </Container>
  )
}
