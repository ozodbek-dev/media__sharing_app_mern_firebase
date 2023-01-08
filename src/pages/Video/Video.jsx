import React from 'react'
import Related from '../../components/Card/Related'
import { VideoCard } from '../../components/Video'
import { VideoContainer } from './Video.styles'


export default function Video() {
  return (
    <VideoContainer>
      <VideoCard/>
      <Related/>
    </VideoContainer>
  )
}
