import React from 'react'
import { CommentCardContainer } from './Comment.styles'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import AvatarBtn from '../Navbar/AvatarBtn'
function CommentCard() {
  return (
    <CommentCardContainer>
      <div className="avatar">
        <AvatarBtn />
      </div>

      <div className="commmetContent">
        <div className="details">
          <span className="name">Rishav Sharma</span>
          <span className="time">3 month ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dicta consequuntur quis impedit ipsum, dignissimos a similique
          accusantium inventore nulla quasi eaque voluptatem, harum suscipit
          culpa possimus ipsam nihil at. lorem100
          <br />
          <button className="showBtn">Read More</button>
        </p>

        <div className="reaction_btns">
          <button className="thumb_up">
            <ThumbUpOffAltIcon /> <span>4</span>
          </button>
          <button className="thumb_down">
            <ThumbDownOffAltIcon />
          </button>
          <button className="reply">Reply</button>
        </div>
      </div>
    </CommentCardContainer>
  )
}

export default CommentCard
