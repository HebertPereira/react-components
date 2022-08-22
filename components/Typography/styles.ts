import styled from "styled-components";

import Colors from "../../Utils/Constants/Colors";
import TypographyList from "../../Utils/Constants/TypographyList";

interface TypographyStyleProps {
  color?: Colors;
  lineHeight: "small" | "medium" | "large";
  isBold: boolean;
  as: TypographyList;
}

export const Box = styled.div<TypographyStyleProps>`
  width: fit-content;

  color: ${({ color }) => color};

  font-family: "Roboto", sans-serif;

  // Font size controller
  ${({ as }) =>
    as === "h1" &&
    `font-size: clamp(1rem, 1.5rem + 1.2vw, 3rem); font-weight: 700;`}
  ${({ as }) =>
    as === "h2" &&
    `font-size: clamp(1rem, 1rem + 0.8vw, 3rem); font-weight: 500;`}
  ${({ as }) =>
    as === "h6" &&
    `font-size: clamp(0.8rem, 0.5rem + 0.5vw, 1.5rem); font-weight: 400;`}
  ${({ as }) =>
    as === "p" &&
    `font-size: clamp(1rem, 0.6rem + 0.6vw, 1.5rem); font-weight: 400;`}

  // Bolder controller
  ${({ isBold }) => isBold && "font-weight: 700;"}

  // Line height controllers
  ${({ lineHeight }) => lineHeight === "large" && `line-height: 2.6rem;`}
  ${({ lineHeight }) => lineHeight === "medium" && `line-height: 2rem;`}
  ${({ lineHeight }) => lineHeight === "small" && `line-height: 1.6rem;`}
`;
