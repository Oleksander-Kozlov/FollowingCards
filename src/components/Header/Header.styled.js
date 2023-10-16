import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  border-bottom: 5px solid rgba(243, 243, 243, 0.2);
  background-color: #5CD3A8;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Manrope', Arial, sans-serif;

  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  margin-left: auto;
  margin-right: auto;
  color: #f3f3f3;
  background-color: #5cd3a8;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 23px;
    padding-bottom: 23px;
  }
`;

export const Navigation = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1280px) {
    display: flex;
  
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const BurgerMenuBtn = styled.button`
  display: none;
  margin-left: 24px;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);

  @media screen and (max-width: 1279.5px) {
    display: flex;
  }
`;

export const UserBarBtn = styled.button`
  margin-left: auto;
  width: 116px;
  height: 44px;
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 40px;
  color: #f3f3f3;

  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  /* gap: 6px; */
  border-radius: 10.311px;
  background-color: ${props => props.color || '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: var(--landing-button-text-color, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  &:hover {
    background-color: yellow;
  }

  &.active {
    background: linear-gradient(
      115deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
  }
`;

export const UserBarName = styled.span`
  color: #f3f3f3;
`;

export const UserBarImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: white;
`;

export const LinkLogo = styled(Link)`
  display: inline-flex;
  height: 28px;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  padding: 8px 16px;
  gap: 14px;
  color: #f3f3f3;

  text-decoration: none;
`;
