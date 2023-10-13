import { Container } from "./GlobalStyled/container.styled.js";
import { GlobalStyle } from "./GlobalStyled/global.styled.js";
import UserCards from "./UserCards/UserCards.jsx"
export const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <section>
        <Container>
          <UserCards></UserCards>
        </Container>
      </section>
    </>
  );
};
