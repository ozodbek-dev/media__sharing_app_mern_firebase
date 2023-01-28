import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import Related from '../../components/Card/Related'
import { VideoCard } from '../../components/Video'
import { VideoContainer } from './Video.styles'


export default function Video() {
  return (
    <VideoContainer>
      <VideoCard/>
      <Related/>
      <ScrollToTop smooth top={200}/>
    </VideoContainer>
  )
}
