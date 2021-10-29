import styled from "styled-components";

export const Head = styled.header`
  background-color: #c95454;
`;

export const SelectArea = styled.div`
  width: 35%;

  .select-area {
    width: 100%;
  }

  .text-area {
    width: 52%;
  }

  select.form-select:focus {
    border-color: #3c3c3c !important;
    box-shadow: 0 0 0 0.25rem rgb(0 0 0 / 25%) !important;
  }

  @media screen and (max-width: 1300px) {
    & {
      width: 40%;
    }

    .text-area {
      width: 50%;
    }
  }

  @media screen and (max-width: 1210px) {
    & {
      width: 45%;
    }
  }

  @media screen and (max-width: 1100px) {
    & {
      width: 50%;
    }
  }

  @media screen and (max-width: 880px) {
    .text-area {
      width: 100%;
    }
  }

  @media screen and (max-width: 850px) {
    & {
      width: 55%;
    }
  }

  @media screen and (max-width: 400px) {
    & {
      width: 75%;
    }
  }
`;
