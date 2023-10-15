
import {
  CardWrapper,
  FollowButton,
  Ul,

} from './UserCards.styled.js';
// import avatar_1x from '../../assets/img/avatar@1x.png';
import { useEffect } from 'react';
// import { fetchUsersCards } from 'components/API/Api.js';
import { useState } from 'react';
// import { ButtonAddRemove } from 'components/FollowButton/FollowButton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersCards } from 'redux/follow/operations.js';
import { selectUsers } from 'redux/follow/selector.js';
import { FollowCard } from 'components/FollowCard/FollowCard.jsx';



const UserCards = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const data = useSelector(selectUsers)
  
    

  useEffect(() => {
    
   dispatch(fetchUsersCards(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  
 
  return (
    <>
      <Ul>
        {data.map(item => (
          <CardWrapper key={item.id}>
            <FollowCard item={item} />
          </CardWrapper>
        ))}
      </Ul>
      {data.length !== 12 && (
        <FollowButton type="button" onClick={handleLoadMore}>
          Load More
        </FollowButton>
      )}
    </>
  );
};
export default UserCards;