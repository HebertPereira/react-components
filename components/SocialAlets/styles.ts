import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 7vh;

  background-color: #25d366;

  border-radius: 1.2rem;

  > svg {
    width: 4rem;
    height: 4rem;
    margin-left: -0.5rem;
  }

  > h6 {
    width: fit-content;
    max-width: 12vw;

    padding: 0.5rem 0.8rem;

    text-align: center;
    font-weight: 700;
    line-height: 1.2rem;
  }
`;
