
import {
  HeaderContainer,
  Navigation,
  NavigationList,
  
  StyledLink,
  Head,
} from './Header.styled';
;

export const Header = () => {

  return (
    <Head>
      
      <HeaderContainer>
        <h2>Tweets List</h2>

        <Navigation>
          <NavigationList>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/tweets">Tweets</StyledLink>
          </NavigationList>
        </Navigation>
      </HeaderContainer>
    </Head>
  );
};
