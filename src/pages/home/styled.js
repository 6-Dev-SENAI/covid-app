import styled from 'styled-components';

export const GraphsContainer = styled.div`
  @media screen and (max-width: 880px) {
    & {
      justify-content: center !important;
      flex-wrap: wrap;
    }
  }
`;

export const GraphContainer = styled.div`
  @media screen and (max-width: 400px) {
    & {
      padding: 0% !important;
      justify-content: center !important;
    }
  }
`;
