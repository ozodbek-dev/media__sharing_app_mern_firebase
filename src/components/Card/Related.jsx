import React from 'react'
import { RelatedContainer } from './MediaCardStyles'
import RelateCard from './RelateCard'

const Related = () => {
  return (
    <RelatedContainer>
      <div className="wrapper">
        <RelateCard/>
        <RelateCard/>
        <RelateCard/>
        <RelateCard/>
        <RelateCard/>
      </div>
    </RelatedContainer>
  )
}

export default Related