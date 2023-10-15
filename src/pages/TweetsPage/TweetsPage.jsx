// import { Container } from "components/GlobalStyled/container.styled";
import { BackLink } from "components/BackLink";
import DropDownMenu from "components/DropDownMenu/DropDownMenu";
import UserCards from "components/UserCards/UserCards";
// import { useRef } from "react";





export const TweetsPage = () => {
    
  return (
    <section>
      {/* <Container> */}      
        <BackLink to={"/"}>GO BACK</BackLink>    

      <UserCards       
      />
      <DropDownMenu />
      {/* </Container> */}
    </section>
  );
};
