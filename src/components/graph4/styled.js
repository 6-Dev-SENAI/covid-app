import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.9em;
  border-radius: 15px;
  background-color: #3c3c3c;

  @media screen and (max-width: 390px) {
    & {
      width: 100vw;
    }
  }
`;
