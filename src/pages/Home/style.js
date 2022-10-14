import styled from 'styled-components';
import BgOrganic from '../../assets/banners/BgOrganic.jpg';
import BgViewMore from '../../assets/banners/BgViewMore.jpg';
import BgFollowUs from '../../assets/banners/BgFollowUs.png';

export const BannerSection = styled.div`
  background-image: url(${BgOrganic});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 70rem;

  @media (max-width: 991px) {
    height: 55rem;
  }

  @media (max-width: 767px) {
    height: 45rem;
  }

  @media (max-width: 575px) {
    height: 35rem;
  }
`;

export const BannerViewMore = styled.div`
  background: rgba(0, 0, 0, 0.5) url(${BgViewMore});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 35rem;

  @media (max-width: 767px) {
    height: 25rem;
  }

  @media (max-width: 575px) {
    height: 15rem;
  }
`;

export const BannerFollow = styled.div`
  background: rgba(0, 0, 0, 0.5) url(${BgFollowUs});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 15rem;

  @media (max-width: 767px) {
    height: 10rem;
  }
`;
