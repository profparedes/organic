import styled from 'styled-components';
import BgStatistics from '../../assets/banners/BgStatistics.jpg';

export const BannerStatistics = styled.div`
  background: rgba(0, 0, 0, 0.6) url(${BgStatistics});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 18rem;

  @media (max-width: 767px) {
    height: 20rem;
  }

  @media (max-width: 575px) {
    height: 40rem;
  }
`;
