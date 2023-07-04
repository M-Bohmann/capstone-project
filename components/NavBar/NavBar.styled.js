import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-top: solid;
`;

export const NavSvgs = styled.svg`
  font-size: 36px;
  fill: ${({ isActive }) => (isActive ? "green" : "")};
  width: 100%;
`;
