import { CardWrapper, FollowButton, LinkSelectWrapper, Ul } from './UserCards.styled.js';

import { useEffect } from 'react';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersCards } from 'redux/follow/operations.js';
import { selectIsLoading, selectUsers } from 'redux/follow/selector.js';
import { FollowCard } from 'components/FollowCard/FollowCard.jsx';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu.jsx';
import { Container } from 'components/GlobalStyled/container.styled.js';
import { Loader } from 'components/Loader/Loader.jsx';
import { BackLink } from 'components/BackLink.jsx';


const UserCards = () => {
  const [page, setPage] = useState(1);
  const [fil, setfil] = useState('showall');
  const dispatch = useDispatch();
  const data = useSelector(selectUsers);
  const Loading = useSelector(selectIsLoading);

  const filteredData = option => {
    setfil(option);
  };
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
    <>
      {Loading ? (
        <Loader />
      ) : (
        <Container>
          <LinkSelectWrapper>
            <BackLink to={"/"}>Go Back</BackLink>
            <DropDownMenu filter={filteredData} />
          </LinkSelectWrapper>
          <Ul>
            {newData.map(item => (
              <CardWrapper key={item.id}>
                <FollowCard item={item} />
              </CardWrapper>
            ))}
          </Ul>

          {superData.length !== 12 && (
            <FollowButton type="button" onClick={handleLoadMore}>
              Load More
            </FollowButton>
          )}
        </Container>
      )}
    </>
  );
};
export default UserCards;
