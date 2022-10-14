import styled from 'styled-components';

export const BottonDetail = styled.div`
  height: 0.4rem;
  width: 8rem;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
`;

export const PageBanner = styled.div`
  background: rgba(0, 0, 0, 0.5) url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 16rem;

  @media (max-width: 767px) {
    height: 10rem;
  }
`;
