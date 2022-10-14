import styled from 'styled-components';

export const TitleContainer = styled.h2`
  border-bottom: 2px solid var(--primary-color);
  width: 80%;

  @media (min-width: 576px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 992px) {
    width: 20%;
  }
`;

export const DescriptionContainer = styled.p`
  width: 100%;

  @media (min-width: 576px) {
    width: 90%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;
