import styled from "styled-components";
import homeImage from "../../assets/img/eaff9-clickwallpapers-pokemon-legends-arceus-img2-scaled.jpg";


export const BigContainer = styled.div`
 
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-image: url(${homeImage});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  
`;
