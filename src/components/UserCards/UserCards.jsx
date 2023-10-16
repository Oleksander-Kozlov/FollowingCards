
import {
  CardWrapper,
  FollowButton,
  Ul,

} from './UserCards.styled.js';

import { useEffect } from 'react';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersCards } from 'redux/follow/operations.js';
import {  selectUsers } from 'redux/follow/selector.js';
import { FollowCard } from 'components/FollowCard/FollowCard.jsx';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu.jsx';
import { Container } from 'components/GlobalStyled/container.styled.js';




const UserCards = () => {
  const [page, setPage] = useState(1);
  const [fil, setfil] = useState('showall');
  const dispatch = useDispatch();
  const data = useSelector(selectUsers)

   const filteredData = option => {
    setfil(option);
  }
  let pagination = page * 3;
  
  let superData = data.slice(0, pagination);
  const newData = superData.filter(user => {
    if (fil === 'showall') {
      return user;
    }
    return user.isFollow === fil;
  });
    

  useEffect(() => {
    
    dispatch(fetchUsersCards(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
  
    setPage(page + 1);
  };
  
 
  return (
    <Container>
      <Ul>
        {newData.map(item => (
          <CardWrapper key={item.id}>
            <FollowCard item={item} />
          </CardWrapper>
        ))}
      </Ul>

      <DropDownMenu filter={filteredData} />
      {superData.length !== 12 && (
      <FollowButton type="button" onClick={handleLoadMore}>
        Load More
      </FollowButton>
      )}
    </Container>
  );
};
export default UserCards;