import styled from 'styled-components';

export const Container = styled.div`
  position: ${({ position }) => position || 'static'};
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 375px) {
    max-width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    padding-left: 10px;
    padding-right: 10px;
    max-width: 1280px;
  }
`;
