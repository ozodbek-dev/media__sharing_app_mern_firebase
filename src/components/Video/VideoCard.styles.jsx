import styled from 'styled-components'
import { d_flex } from '../../Mixins'

export const VideoCardContainer = styled.div`
  max-width: 1280px;
  ${d_flex('column', '', '', '')};
`

export const Video = styled.iframe`
  width: 1280px;
  height: 720px;
  box-shadow: 0 0 150px var(--main_shadow_color);
`
export const VideoFooter = styled.div`
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
      ${d_flex('row', '', 'center', 'space-between')}
      &_left {
      ${d_flex('row', '', 'center', 'space-between')}
        .profile {
          max-width: 300px;
          border: 1px solid red;
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
    }
  }
`

export const Btn = styled.button``
export const Icon_Btn = styled.button``
