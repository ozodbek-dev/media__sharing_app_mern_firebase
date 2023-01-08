import React from 'react'
import { CommentInput, CommentsWrapper } from './Comment.styles'
import SortIcon from '@mui/icons-material/Sort'
import CommentCard from './CommentCard'
import { Button, TextField } from '@mui/material'
import AvatarBtn from '../Navbar/AvatarBtn'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Btn } from '../Video/VideoCard.styles'
const Comments = () => {
  return (
    <CommentsWrapper>
      <h3>
        <span>42</span> Comments{' '}
        <span>
          <Button
            color="inherit"
            component="lebel"
            size='medium'
            sx={{}}
          >
            <SortIcon />
          </  Button>
          <span>Soart by</span>
        </span>
      </h3>
      <CommentInput>
          <AvatarBtn/>
          <div className="inputSection">
          <input type="text" placeholder='Add  comment' />
          <div className="btns">
            <Btn className="btn_1">
            <TagFacesIcon/>
            </Btn>

           <div className="addbtns">
           <Btn className="btn_cancel">
            Cancel
            </Btn>
            <Btn className="btn_comment">
            Comment
            </Btn>
           </div>
          </div>
          </div>

      </CommentInput>
      <div className="list">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </CommentsWrapper>
  )
}

export default Comments
