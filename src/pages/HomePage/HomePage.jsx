import { FollowButton, NavLink } from "components/UserCards/UserCards.styled"
import { HomePageWrapper } from "./HomePage.styled";


export const HomePage = () => {
    return (
      <HomePageWrapper
        style={{
          display: 'flex',
          'flexDirection': 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
        }}
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