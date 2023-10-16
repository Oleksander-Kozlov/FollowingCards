import { Container } from "components/GlobalStyled/container.styled";
import UserCards from "components/UserCards/UserCards";

export const TweetsPage = () => { 

  return (
    <section>      
      <Container>    
          <UserCards />
        </Container> 
    </section>
  );
};
