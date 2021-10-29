import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.9em;
  width: 25%;
  border-radius: 15px;
  background-color: #3c3c3c;

  @media screen and (max-width: 880px) {
    & {
      width: 50vw;
      margin-bottom: 0.7rem !important;
    }
  }

  @media screen and (max-width: 600px) {
    & {
      width: 75vw;
    }
  }

  @media screen and (max-width: 400px) {
    & {
      width: 100vw;
    }
  }
`;
