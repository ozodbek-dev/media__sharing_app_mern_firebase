import React from 'react'
import {
  VideoCardContainer,
  Video,
  VideoFooter,
  Btn,
  Icon_Btn,
} from './VideoCard.styles'
import { Link } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ShareIcon from '@mui/icons-material/Share'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AvatarBtn from '../Navbar/AvatarBtn'
function VideoCard() {
  return (
    <VideoCardContainer>
      <Video
        src="https://www.youtube.com/embed/uFp3sIs2IY4"
        title="Frontend Developer Course with Projects [Build 2 Websites] | HTML CSS JAVASCRIPT SASS ANIMATIONS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Video>
      <VideoFooter>
        <div className="content">
          <div className="content__top">
            <div className="content__top_tags">
              <span>
                <a href="#">#frontenddeveloper</a>{' '}
              </span>
              <span>
                <a href="#">#frontenddeveloper</a>{' '}
              </span>
              <span>
                <a href="#">#frontenddeveloper</a>{' '}
              </span>
              <span>
                <a href="#">#frontenddeveloper</a>{' '}
              </span>
            </div>
            <h3 className="content__top_title">
              Frontend Developer Course with Projects [Build 2 Websites] | HTML
              CSS JAVASCRIPT SASS ANIMATIONS
            </h3>
          </div>
          <div className="content__bottom">
            <div className="content__bottom_left">
              <Link to="/">
                <div className="profile">
                  <AvatarBtn/>
                  <div className="profile_info">
                    <p className="name">Kishan Sheth</p>
                    <p className="subs">Kishan Sheth 9.38K subscribers</p>
                  </div>
                </div>
              </Link>
              <Btn className="">Subscribed</Btn>
              <Icon_Btn>
                <NotificationsNoneIcon />
              </Icon_Btn>
            </div>
            <div className="content__bottom_right">
              <div className="btns">
                <Icon_Btn>
                  <ThumbUpOffAltIcon />
                </Icon_Btn>
                <Icon_Btn>
                  <ThumbDownOffAltIcon />
                </Icon_Btn>
              </div>
              <Icon_Btn>
                <ShareIcon />
              </Icon_Btn>
              <Icon_Btn>
                <PlaylistAddIcon />
              </Icon_Btn>
              <Icon_Btn>
                <MoreVertIcon />
              </Icon_Btn>
            </div>
          </div>
        </div>
      </VideoFooter>
    </VideoCardContainer>
  )
}

export default VideoCard
