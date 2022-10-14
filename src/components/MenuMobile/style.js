import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 12rem;
`;

export const InputContainer = styled.input`
  background-color: #eee;
  min-width: 14rem;
  font-size: 0.9rem;
`;

export const MenuContainer = styled.div`
  min-height: 100vh;
  width: 16rem;
  z-index: 2;
  left: -280px;
  transition: left 0.2s;

  &.show {
    left: 0;
  }
`;
