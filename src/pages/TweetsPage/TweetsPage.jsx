
import { BackLink } from "components/BackLink";
// import { Loader } from "components/FollowButton/Loader/Loader";
import { Container } from "components/GlobalStyled/container.styled";

import UserCards from "components/UserCards/UserCards";
// import { useSelector } from "react-redux";
// import { selectIsLoading } from "redux/follow/selector";






export const TweetsPage = () => {
  

  return (
    <section>
      <Container>
          <BackLink to={'/'}>GO BACK</BackLink>

          <UserCards />
        </Container> 
    </section>
  );
};
