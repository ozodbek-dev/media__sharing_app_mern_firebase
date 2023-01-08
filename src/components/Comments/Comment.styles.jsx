import styled from 'styled-components'
import { d_flex } from '../../Mixins'

export const CommentCardContainer = styled.div`
margin-top: 20px;
  ${d_flex('row', '', 'start', '')};
  .avatar {
    min-width: 50px;
  }
  .commmetContent {
    padding: 5px 10px;
    ${d_flex('column', '', '', '')};
    .details {
      ${d_flex('row', '', 'center', '')};
      span {
        &.name {
          color: var(--main_text_color);
          margin-right: 5px;
          font-size: 14px;
          font-weight: bold;
        }
        &.time{
          color:var(--main_text_color_2);
          font-size: 14px;
        }
      }
    }
    p{
      margin-top: 2vh;
      border-left: 1px solid var(--main_text_color_2);
      padding: 0 0.8vh;
      color:var(--main_text_color);
      font-size: 14px;
      font-weight: 400;
      max-lines: 8;
    }
    button.showBtn{
      margin-top: 10px;
      display: inline-block;
      color:var(--main_text_color_2);
      font-size: 14px;
      font-weight: bold;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
      background-color: transparent;
    }
    .reaction_btns{
      margin-top: 10px;
      ${d_flex('', '', 'center', 'flex-start')};
      button{
        margin-right: 1rem;
        background-color: transparent;
        color:var(--main_text_color);
        cursor:pointer;
        svg{
          font-size: 25px;
        }
        &.thumb_up{
            ${d_flex('', '', 'center', 'flex-start')};
          span{
            color:var(--main_text_color_2);
            font-size: 1rem;
            margin-left: 5px;
          }
        }
      }
    }
  }
`
export const CommentsWrapper = styled.div`
  h3 {
    color: var(--main_text_color);
    font-size: 14px;
    font-weight: 400;
    ${d_flex('row', '', 'center', '')};
    margin-top: 16px;
    span {
      margin-right: 10px;
      ${d_flex('row', '', 'center', '')};
    }
  }
  .list {
    margin-top: 2rem;
  }
`
export const CommentInput = styled.div`
  ${d_flex('', '', 'center', '')}
  .inputSection {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      font-size: 12px;
      padding: 5px 0;
      color: white;
      background-color: transparent;
      border-bottom: 1px solid var(--btn_hover_color);
    }
    .btns {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .btn_1 {
        border-radius: 50%;
        ${d_flex('', '', 'center', 'center')}
        width: 30px;
        height: 30px;
        padding: 0;
        margin: 0;
        margin-top: 10px;
      }
      .addbtns {
        ${d_flex('', '', 'center', 'center')}
        .btn_cancel {
          background-color: transparent;
          color: var(--main_text_color);
          margin-right: 10px;
          padding: 5px 10px;
          &:hover {
            background-color: var(--btn_color_2);
          }
        }
        .btn_comment {
          pointer-events: none;
          background-color: var(--btn_color_2);
          color: var(--main_text_color_2);
          margin-right: 10px;
          padding: 5px 10px;
        }
      }
    }
  }
`
