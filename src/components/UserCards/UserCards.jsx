
import {
  CardWrapper,
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

  useEffect(() => {
    dispatch(fetchUsersCards(page));
    // const fetchData = async () => {
    //   try {
    //     const result = await fetchUsersCards(page);
    //     const newData = [...data, ...result];
    //     setData(newData);
    //     console.log('newData', newData);
    //   } catch (error) {
    //     // Обробка помилок, якщо необхідно
    //     console.error('Error fetching user cards:', error);
    //   }
    // };
    // fetchData();
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const data = useSelector(selectUsers);
 data.map(item => (console.log(item)));
  return (
    <>
      <Ul>
        {data.map(item => (
          <CardWrapper key={item.id} >
            <FollowCard item={item} />
          </CardWrapper>
        ))}
      </Ul>
      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};
export default UserCards;