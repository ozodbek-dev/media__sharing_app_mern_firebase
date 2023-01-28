import styled from "styled-components";
import { d_flex } from "../../Mixins";
export const Container = styled.div`
  .img {
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    margin-bottom: 20px;
  }
  .profile {
    position: relative;
    ${d_flex("row", "", "flex-start", "flex-start")}
    .info {
      width: calc(100% - 40px);
      margin-left: 15px;
      padding-right: 20px;
      p.title {
        font-size: 16px;
        color: var(--main_text_color);
        margin-bottom: 10px;
      }
      p.name {
        padding-bottom: 10px;
        color: var(--main_text_color_2);
        font-size: 10px;
      }
    }
  }
  &:hover {
    .profile {
      button {
        display: block !important;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .img {
      width: 100%;
      border-radius: 0;
      margin-bottom: 10px;
    }
    .profile {
      .info {
        margin-left: 10px;

        p.title {
          font-size: 14px;
        }
        p.name {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
`;

export const MoreBtn = styled.button`
  display: none !important;
  position: absolute;
  right: -20px;
  top: -10px;
  display: grid;
  place-items: center;
  background-color: transparent;
  color: var(--main_text_color);
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: var(--btn_color);
    border-radius: 50%;
  }
  @media screen and (max-width: 600px) {
    display: none !important;
    position: absolute;
    right: 0px;
    top: -10px;
    display: block !important;
  }
`;

export const RelatedContainer = styled.div`
  align-self: flex-start;
  width: 30vmax;
  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
`;
export const RelateCardContainer = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  ${d_flex("row", "", "center", "")}

  .cover {
    min-width: 150px;
    max-width: 250px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    position: relative;
    span.duration {
      position: absolute;
      bottom: 5px;
      right: 5px;
      background-color: var(--main_bg_color_2);
      color: var(--main_text_color);
      font-size: 12px;
      padding: 3px;
      border-radius: 4px;
    }

    .iconbtns {
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 5px;
      right: 5px;
      ${d_flex("column", "", "center", "")}
      button {
        ${d_flex("", "", "center", "center")}

        margin-bottom:3px;
        border-radius: 5px;
        background-color: var(--main_bg_color_2);
        color: var(--main_text_color);
        padding: 2px;
        cursor:pointer svg {
          font-size: 20px;
        }
      }
      transition: all 0.2s ease-in-out;
    }
  }
  .info {
    padding: 0px 8px;
    align-self: flex-start;
    span {
      &.title {
        color: var(--main_text_color);
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    h3 {
      font-size: 14px;
      color: var(--main_text_color_2);
      font-weight: 300;
      padding: 10px 0 5px 0;
    }
    h4 {
      font-size: 12px;
      color: var(--main_text_color_2);
      font-weight: 300;
      padding-bottom: 5px;
    }
  }
  &:hover {
    .cover {
      .iconbtns {
        opacity: 1;
        pointer-events: all;
      }
    }
    .detailsBtn {
      opacity: 1;
      pointer-events: all;
    }
  }
  .detailsBtn {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--main_bg_color);
    border-radius: 50%;
    display: grid;
    place-content: center;
    color: var(--main_text_color);
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width:100%;
    margin: 2rem 0;
    .cover {
      align-self: flex-start;
      width: 90%;
      max-width: 100%;
      min-width: none;
      height: auto;
      border-radius: 10px;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;
