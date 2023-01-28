import { Button } from '@mui/material'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../assets/notFound.png'
import MetaData from '../MetaData'
import { NotFoundContainer } from './NotFound.styles'
function NotFound() {
  return (
    <Fragment>
      <MetaData title="404 ERROR" />
      <NotFoundContainer>
        <img src={notFound} alt="404 error" />
        <Button variant='contained' color="success" to={'/'} LinkComponent={Link}>Home</Button>
      </NotFoundContainer>
    </Fragment>
  )
}

export default NotFound
