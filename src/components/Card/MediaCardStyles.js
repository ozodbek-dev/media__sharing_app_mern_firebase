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
