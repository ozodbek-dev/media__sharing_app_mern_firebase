import React from 'react'
import { RelateCardContainer } from './MediaCardStyles'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
const RelateCard = () => {
  return (
    <Link to="/asdf">
      <RelateCardContainer>
        <div className="cover">
          <span className="duration">22:23</span>
          <div className="iconbtns">
            <button>
              <AccessTimeIcon />
            </button>
            <button>
              <PlaylistPlayIcon />
            </button>
          </div>
          <img
            src="https://i.ytimg.com/an_webp/DHvLp61A-7M/mqdefault_6s.webp?du=3000&sqp=COLl6J0G&rs=AOn4CLC672LI94CUoAc9jizlIk5i4RcuZw"
            alt="Zain"
          />
        </div>
        <div className="info">
          <span className="title">
            Chat App using React and Firebase | Realtime Private Chat
            Application{' '}
          </span>
          <h3>Ozodbek Bakhtiyorov</h3>
          <h4 className="subinfo">
            <span className="views">197k views</span>{' '}
            <span className="dot">•</span>
            <span className="timeago"> 5 months ago</span>
          </h4>
        </div>
        <button className="detailsBtn">
          <MoreVertIcon />
        </button>
      </RelateCardContainer>
    </Link>
  )
}

export default RelateCard
