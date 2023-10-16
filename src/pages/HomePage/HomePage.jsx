import { FollowButton, NavLink } from "components/UserCards/UserCards.styled"
import { HomePageWrapper } from "./HomePage.styled";


export const HomePage = () => {
    return (
      <HomePageWrapper
        
      >
        <h1
          style={{
            padding: '100px',
            
          }}
        >
          You welcome 🥳
        </h1>
        <NavLink to="/tweets">
          <FollowButton>Lets tweets</FollowButton>
        </NavLink>
      </HomePageWrapper>
    );
}