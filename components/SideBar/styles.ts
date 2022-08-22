import styled from "styled-components";

interface SideBarStyleProps {
  isOpen: boolean;
}

export const Box = styled.div<SideBarStyleProps>`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;

  ${({ isOpen }) =>
    isOpen
      ? `visibility: visible; opacity: 0.4;`
      : `visibility: hidden; opacity: 0;`}

  transition: all 0.4s ease-in-out;
`;

export const Aside = styled.aside<SideBarStyleProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 40vw;
  min-width: 300px;
  height: calc(100% - 0.5rem);

  background-color: #fff;

  ${({ isOpen }) =>
    isOpen
      ? `visibility: visible; opacity: 1;`
      : `visibility: hidden; opacity: 0;`}

  transition: all 0.4s ease-in-out;

  padding: 0.5rem 0.5rem 0rem 0.5rem;
`;

export const IconBox = styled.div`
  cursor: pointer;
`;

export const Title = styled.h2`
  width: 95%;
  border-top: 1px solid #c1c1c1;
  padding: 1rem 0.5rem 1rem 0rem;
  margin: 0;
`;
