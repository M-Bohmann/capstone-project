import styled, { css } from "styled-components";

export const StyledUserIcon = styled.svg`
  ${(props) =>
    props.isOnBalcony &&
    css`
      fill: orange;
      stroke: #ffffff;
      stroke-width: 1px;
      position: absolute;
      left: 0.3rem;
      top: 0.2rem;
      font-size: 22px;
      z-index: 10;
    `}
  ${(props) =>
    props.isOnPlantDetails &&
    css`
      position: absolute;
      fill: orange;
      stroke: #ffffff;
      stroke-width: 1px;
      font-size: 26px;
      top: 0rem;
      right: 50%;
      transform: translateX(50%);
    `}
`;
