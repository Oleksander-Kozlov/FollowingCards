// import { useSelector } from "react-redux";
// import { selectFollowers } from "redux/follow/selector";

const { ButtonAddRemove } = require("components/FollowButton/FollowButton")
const { AvatarWrapper, Avatar,  FollowBox, Tweets } = require("components/UserCards/UserCards.styled")

export const FollowCard = ({ item }) => {
  const { avatar, id, user, tweets, isFollow, followers } = item;
 
  let formattedFollowers = followers.toLocaleString('en-US');
    return (
      <>
        <AvatarWrapper>
          <Avatar
            src={avatar}
            alt={user}
            id={id}
            width={'80px'}
            height={'80px'}
          />
        </AvatarWrapper>
        {/* <MidleLine></MidleLine> */}
        <FollowBox>
          <Tweets>{tweets} tweets</Tweets>
          <Tweets> {formattedFollowers} Followers</Tweets>

          <ButtonAddRemove
            id={id}
            isFollow={isFollow}
            followers={followers}
          ></ButtonAddRemove>
        </FollowBox>
      </>
    ); 
    
    
   
}