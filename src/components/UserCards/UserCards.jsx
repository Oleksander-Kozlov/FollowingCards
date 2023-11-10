import { CardWrapper, FollowButton, LinkSelectWrapper, Logo, Ul } from './UserCards.styled.js';

import { useEffect } from 'react';

import { useState } from 'react';

import {
  useDispatch,
  useSelector
} from 'react-redux';
import { fetchUsersCards } from 'redux/follow/operations.js';
import { selectIsLoading, selectUsers } from 'redux/follow/selector.js';
import { FollowCard } from 'components/FollowCard/FollowCard.jsx';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu.jsx';
import { Container } from 'components/GlobalStyled/container.styled.js';
import { Loader } from 'components/Loader/Loader.jsx';
import { BackLink } from 'components/BackLink.jsx';
import logo1x from '../../assets/img/logo@1x.png';
import logo2x from '../../assets/img/logo@2x.png';


const UserCards = () => {
  const [pagination, setPagination] = useState(3);
  const [fil, setfil] = useState();
  const dispatch = useDispatch();
  const data = useSelector(selectUsers);
  const Loading = useSelector(selectIsLoading);

  const filteredData = option => {
    setfil(option);
    
  };

  const newData = data.filter(user => {
    if (fil === 'follow') {
      return user.isFollow === false;
    }
    if (fil === 'following') {
      return user.isFollow === true;
    }
    return user;
  });
  let superData = newData.slice(0, pagination);

  useEffect(() => {
    dispatch(fetchUsersCards());
  }, [dispatch]);

  const handleLoadMore = () => {
    setPagination(prevPagination => prevPagination + 3);
  };

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <Container>
          <LinkSelectWrapper>
            <BackLink to={'/'}>Go Back</BackLink>
            <DropDownMenu filter={filteredData} />
          </LinkSelectWrapper>
          <Ul>
            {superData.map(item => (
              <CardWrapper key={item.id}>
                <Logo
                  srcSet={`${logo1x} 1x, ${logo2x} 2x`}
                  src={logo1x}
                  alt="logo"
                  width={76}
                  height={26}
                />
                <FollowCard item={item} />
              </CardWrapper>
            ))}
          </Ul>

          {data.length !== superData.length && (
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
