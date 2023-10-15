
import { FollowButton } from 'components/UserCards/UserCards.styled';

// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFollow } from 'redux/follow/operations';
import { selectCardsById } from 'redux/follow/selector';
// import { useSelector, useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import { selectFavoriteDrinks } from '../../redux/auth/authSelectors';
// import {
//   addFavoriteDrink,
//   removeFavoriteDrink,
// } from '../../redux/drinks/drinksOperations';
// import { Button } from './RecipeButton.styled';

export const ButtonAddRemove = ({ id, isFollow, followers }) => {
  // const [areYouFollow, setAreYouFollow] = useState(isFollow);
  console.log('ID', id);
  const dispatch = useDispatch();
  const handleFollow = async () => {
     
      // const follow = !areYouFollow;
    // const counter = !isFollow ? followers + 1 : followers - 1;
    const obj = { id, isFollow, followers };
    dispatch(addToFollow(obj));
    // const result = await addToFollow(id, follow, counter);
    // console.log('result', result);

    // setAreYouFollow(result.isFollow);
    // const data = [...result]
    // console.log('newData', newData);
  };
  
 

  return (
    <>
      {!isFollow ? (
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
          <FollowButton
            type="button"
            onClick={() => handleFollow()}
            style={{ background: '#5CD3A8' }}
          >
            FOLLOWING
          </FollowButton>
        </>
      )}
    </>
  );
};
