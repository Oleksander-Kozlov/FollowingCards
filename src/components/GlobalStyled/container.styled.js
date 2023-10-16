import styled from 'styled-components';

export const Container = styled.div`
  position: ${({ position }) => position || 'static'};
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

   

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
