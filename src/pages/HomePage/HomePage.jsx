import { FollowButton, NavLink } from "components/UserCards/UserCards.styled"


export const HomePage = () => {
    return (
      <div
        style={{
          display: 'flex',
          'flex-direction': 'column',
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
      </div>
    );
}