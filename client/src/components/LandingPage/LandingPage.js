import { useEffect } from "react";
import { BigContainer, HomeLink } from "./StyledLandingPage";


const Landing = () => {
  useEffect(()=>{},[])
  return (
    <BigContainer>
      
      <HomeLink to="/home">Inicia la Aventura</HomeLink>
    </BigContainer>
  );
};

export default Landing;
