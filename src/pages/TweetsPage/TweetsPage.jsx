
import { BackLink } from "components/BackLink";
import { Loader } from "components/FollowButton/Loader/Loader";
import { Container } from "components/GlobalStyled/container.styled";

import UserCards from "components/UserCards/UserCards";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/follow/selector";
// import { useRef } from "react";





export const TweetsPage = () => {
  const Loading = useSelector(selectIsLoading);
  return (
    <section>
      {!Loading ? (
        <Container>
          <BackLink to={'/'}>GO BACK</BackLink>

          <UserCards
           
          />
        </Container>
      ) : (
        <Loader />
      )}
    </section>
  );
};
