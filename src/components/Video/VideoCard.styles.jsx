import styled from 'styled-components'
import { d_flex } from '../../Mixins'

export const VideoCardContainer = styled.div`
  max-width: 1280px;
  ${d_flex('column', '', '', '')};
`

export const Video = styled.iframe`
  width: 60vmax;
  height: calc(720px * (3 / 4));
  box-shadow: 0 0 150px var(--main_shadow_color);
  @media screen and (max-width:1200px){
    width:90vw;
  height: calc(720px * (3 / 4));
  }
`
export const VideoFooter = styled.div`
  width: 60vmax;

  @media screen and (max-width:1200px){
    width:90vw;
  }
  .content {
    ${d_flex('column', '', '', '')};
    &__top {
      margin-bottom: 20px;
      &_tags {
        display: flex;
        padding: 5px 0;
        span {
          margin-right: 5px;
          a {
            font-size: 12px;
            color: var(--blue_color);
          }
        }
      }
      &_title {
        color: var(--main_text_color);
        font-size: 20px;
      }
    }
    &__bottom {
      @media screen and (max-width:1300px) and (min-width: 1200px){
    flex-direction: column!important;
    align-items: flex-start;
    gap: 1rem;
    &_left,&_right{
      width:100%;
    }
  }
      ${d_flex('row', '', 'center', 'space-between')}
      &_left {
        ${d_flex('row', '', 'center', 'space-between')}
        .profile {
          max-width: 300px;
          ${d_flex('row', '', '', 'space-between')}
          &_info {
            margin-left: 5px;
            height: 100%;
            ${d_flex('column', '', 'flex-start', '')}
            .name {
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              line-clamp: 1;
              -webkit-box-orient: horizontal;
              color: var(--main_text_color);
              font-size: 1rem;
              padding-bottom: 10px;
              overflow: hidden;
            }
            .subs {
              color: var(--main_text_color_2);
              font-size: 12px;
            }
          }
        }
      }
      &_right {
        ${d_flex('row', '', 'center', 'space-between')}
        .thumbs {
          ${d_flex('row', '', 'center', 'space-between')}
          background-color:var(--btn_color_2);
          border-radius: 20px;
        }
      }
    }
  }
`

export const Btn = styled.button`
  cursor: pointer;
  font-size: 14px;
  border-radius: 15px;
  &.subscribe {
    background-color: var(--main_text_color);
    color: var(--main_bg_color);
    padding: 10px 15px;
    font-weight: bold;
    margin-left: 20px;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  &.btn_1 {
    ${d_flex('row', '', 'center', 'space-between')}
    color:var(--main_text_color);
    background-color: var(--btn_color_2);
    padding: 5px 10px;
    border-radius: 20px;
    margin-left: 20px;
    span {
      color: var(--main_text-color);
      text-transform: capitalize;
      margin-left: 5px;
    }
    svg {
      transition: all 0.1s;
      font-size: 26px;
      padding: 2px;
      color: var(--main_text_color);
    }
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: var(--btn_hover_color);
    }
    &:active {
      svg {
        transform: scale(1.1);
      }
      background-color: var(--active_btn_color);
    }
  }
  &.btn_thumb_up {
    position: relative;
    margin-left: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 1px;
    &::after {
      position: absolute;
      content: '';
      right: 0;
      top: 15%;
      width: 1px;
      height: 70%;
      background-color: var(--btn_hover_color);
    }
  }
  &.btn_thumb_down {
    margin-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const DescContainer = styled.div`
  background-color: rgba(50, 50, 55, 0.8);
  padding: 10px 15px;
  border-radius: 10px;
  color: var(--main_text_color);
  font-size: 0.8rem;
  margin-top: 20px;
`
