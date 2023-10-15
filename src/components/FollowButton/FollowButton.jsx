
import { FollowButton } from 'components/UserCards/UserCards.styled';

// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFollow } from 'redux/follow/operations';


export const ButtonAddRemove = ({ id, isFollow, followers }) => {
 
  const dispatch = useDispatch();
  const handleFollow = async () => {
     
    
    const obj = { id, isFollow, followers };
    dispatch(addToFollow(obj));

  };
  
 

  return (
    <>
      {!isFollow ? (
        <>
          <FollowButton type="button" onClick={() => handleFollow()}>
            FOLLOW
          </FollowButton>
        </>
      ) : (
        <>
          <FollowButton
            type="button"
            onClick={() => handleFollow()}
          
            color="#5CD3A8"
          >
            FOLLOWING
          </FollowButton>
        </>
      )}
    </>
  );
};
