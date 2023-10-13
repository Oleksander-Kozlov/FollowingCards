
import {
    Avatar,
  AvatarWrapper,
  BorderAvatar,
  CardWrapper,
  FollowBox,
  FollowButton,
  MidleLine,
  Tweets,
  Ul,
  UserName,
} from './UserCards.styled.js';
import avatar_1x from '../../assets/img/avatar@1x.png';
import { useEffect } from 'react';
import { fetchUsersCards } from 'components/API/Api.js';
import { useState } from 'react';
import { ButtonAddRemove } from 'components/FollowButton/FollowButton.jsx';


const UserCards = () => {
  const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    
    

console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchUsersCards(page);
      //   console.log('result', result);
      // const data = [...result]
      // console.log('newData', newData);
      const newData = [...data, ...result];

      setData(newData);
      console.log('newData', newData);
    };
    fetchData();
    
  }, [page, ]);
    
    const handleLoadMore = () => {
        setPage(page + 1);
        
    }
    return (
      <>
        <Ul>
          {data.map(({ avatar, tweets, followers, id, user, isFollow }) => (
            <CardWrapper key={id}>
              <AvatarWrapper>
                <Avatar
                  src={avatar}
                  alt={user}
                  id={id}
                  width={'80px'}
                  height={'80px'}
                />
              </AvatarWrapper>
              <MidleLine></MidleLine>
              <FollowBox>
                {/* <Tweets>Name</Tweets> */}
                <Tweets>{tweets} tweets</Tweets>
                <Tweets>{followers} Followers</Tweets>
                {/* <FollowButton id={id}>Follow</FollowButton> */}
                <ButtonAddRemove
                  id={id}
                  isFollow={isFollow}
                  followers={followers}
                >
                  ffff
                </ButtonAddRemove>
              </FollowBox>
            </CardWrapper>
          ))}
        </Ul>
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      </>
    );
};
 export default  UserCards