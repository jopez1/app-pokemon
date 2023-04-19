import styled from "styled-components";
import { Link } from "react-router-dom";
import landingImage from "../../assets/img/landing.jpg";


export const BigContainer = styled.div`
  display: flex;
  align-items: center;
 
  flex-direction: column;
  gap: 32rem;
  min-height: 100%;
  background-image: url(${landingImage});
 
  background-size: cover;

  font-family: Highway-Gothic;
`;



export const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 2.5em;
  padding: 0.5rem;
  border-radius: 5rem;
  margin-top: 35%;

  color: ${(props) => props.theme.colors.text};
  border: ${(props) => props.theme.colors.text} solid 2px;
  box-shadow: 1px 2px 2px ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.background};
  transition: ease-in-out 150ms;

  &:hover {
    padding-left: .5em;
    padding-right: .5em;
    background-color: ${(props) => props.theme.colors.tertiary};
    box-shadow: 1px 2px 8px ${(props) => props.theme.colors.text};
    color: white;
  }
`;
