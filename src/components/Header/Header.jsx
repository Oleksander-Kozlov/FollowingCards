import {
  HeaderContainer,
  Navigation,
  NavigationList,
  
  StyledLink,
  Head,
} from './Header.styled';
;

export const Header = () => {
  // const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);

  // const location = useLocation();

  // const toggleMenu = () => setisOpenBurgerMenu(!isOpenBurgerMenu);

  // if (isOpenBurgerMenu) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = '';
  // }

  // useEffect(() => {
  //   setisOpenBurgerMenu(false);
  // }, [location.pathname]);

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
