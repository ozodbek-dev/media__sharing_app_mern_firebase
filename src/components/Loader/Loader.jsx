import React from 'react'
import { LoaderContainer } from './Loader.styles'

// import { Container } from './styles';

function Loader({ type }) {
  return (
    <LoaderContainer
      className={
        type === 'fullWidth' ? 'fullWidthLoader' : 'fixedFullWidthLoader'
      }
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  )
}

export default Loader
