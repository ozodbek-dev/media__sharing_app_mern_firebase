import React from 'react'
import {
  VideoCardContainer,
  Video,
  VideoFooter,
  Btn,
} from './VideoCard.styles'
import { Link } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ShareIcon from '@mui/icons-material/Share'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AvatarBtn from '../Navbar/AvatarBtn'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import Desc from './Desc'
import Comments from '../Comments/Comments'
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
                  <AvatarBtn />
                  <div className="profile_info">
                    <p className="name">Kishan Sheth</p>
                    <p className="subs">Kishan Sheth 9.38K subscribers</p>
                  </div>
                </div>
              </Link>
              <Btn className="subscribe">Subscribe</Btn>
              <Btn className="btn_1">
                <NotificationsNoneIcon />
                <span>Subscribed</span>
                <KeyboardArrowDownIcon />
              </Btn>
            </div>
            <div className="content__bottom_right">
              <div className="thumbs">
                <Btn className="btn_1 btn_thumb_up">
                  <ThumbUpOffAltIcon />
                  <span>2.2k</span>
                </Btn>
                <Btn className="btn_1 btn_thumb_down">
                  <ThumbDownOffAltIcon />
                </Btn>
              </div>
              <Btn className="btn_1">
                <ShareIcon />
              </Btn>
              <Btn className="btn_1">
                <ContentCutIcon />
                <span>Clip</span>
              </Btn>
              <Btn className="btn_1">
                <PlaylistAddIcon />
                <span>save</span>
              </Btn>
              <Btn className="btn_1">
                <MoreVertIcon />
              </Btn>
            </div>
          </div>
        </div>
      </VideoFooter>
      <Desc />
      <Comments/>
    </VideoCardContainer>
  )
}

export default VideoCard
