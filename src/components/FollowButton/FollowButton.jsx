import { addToFollow } from 'components/API/Api';
import { FollowButton } from 'components/UserCards/UserCards.styled';

import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import { selectFavoriteDrinks } from '../../redux/auth/authSelectors';
// import {
//   addFavoriteDrink,
//   removeFavoriteDrink,
// } from '../../redux/drinks/drinksOperations';
// import { Button } from './RecipeButton.styled';

export const ButtonAddRemove = ({ id, isFollow, followers }) => {
  const [areYouFollow, setAreYouFollow] = useState(isFollow);
  console.log('ID', id);

  const handleFollow = async () => {
      const follow = !areYouFollow;
    const counter =  follow ? followers + 1 : followers - 1;
    const result = await addToFollow(id, follow, counter);
    console.log('result', result);

    setAreYouFollow(result.isFollow);
    // const data = [...result]
    // console.log('newData', newData);
  };

  //

  return (
    <>
      {!areYouFollow ? (
        <>
          <FollowButton
            type="button"
            onClick={
              () => handleFollow()
              // .then(() => notifyAdd())
            }
          >
            FOLLOW
          </FollowButton>
        </>
      ) : (
        <>
          <FollowButton type="button" onClick={() => handleFollow()}>
            FOLLOWING
          </FollowButton>
        </>
      )}
    </>
  );
};
