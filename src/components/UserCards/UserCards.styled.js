import styled from "styled-components";
import bgImg1x from "../../assets/img/imgBg@1x.png"
import bgImg2x from "../../assets/img/imgBg@2x.png"
import logo1x from '../../assets/img/logo@1x.png';
import logo2x from '../../assets/img/logo@2x.png';
import BorderImg from '../../assets/svg/BorderImg.jsx';
import { Link } from "react-router-dom";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const CardWrapper = styled.li`

  
  position: relative;
  z-index: 10;
  padding-top: 175px;
  padding-bottom: 36px;
  width: 380px;
  height: 460px;
  outline: 3px solid tomato;
  border-radius: 20px;

  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
  background-image: url(${logo1x}), url(${bgImg1x}),
    linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-position: left 20px top 20px, left 36px top 28px, right top;
  background-size: 76px 22px, 308px 168px, cover;
  flex-shrink: 0;
  background-repeat: no-repeat;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${logo2x}), url(${bgImg2x}),
      linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

    background-position: left 20px top 20px, left 36px top 28px, right top;
    background-size: 76px 22px, 308px 168px, cover;
    flex-shrink: 0;
    background-repeat: no-repeat;
  }
`;
export const AvatarWrapper = styled.div`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border: 8px solid rgba(235, 216, 255, 1);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  fill: #ebd8ff;
  box-shadow: 0px 4.39163px 3.29372px 0px #fbf8ff inset,
    0px -2.19582px 4.39163px 0px #ae7be3 inset;
  filter: drop-shadow(
    0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06)
  );
  z-index: 5000;
  margin-bottom: 26px;
`;
export const BorderAvatar = styled(BorderImg)`
  position: absolute;
`;
export const Avatar = styled.img`

  position: relative;
  z-index: 5000;
  
`;

export const MidleLine = styled.div`
z-index: 1;
position: absolute;
top: 214px;   
  width: 380px;
  height: 8px;
  flex-shrink: 0;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const FollowBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 10px;
`
export const UserName = styled.h2`margin-top:26px`;

export const Tweets = styled.p`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
export const FollowButton = styled.button`
  /* display: flex; */
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
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
