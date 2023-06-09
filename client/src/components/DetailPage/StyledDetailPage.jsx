import styled, { css } from "styled-components";
import { TitleA } from "../../css/DesignPatterns/TitleA";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";
import detailImage from "../../assets/img/detail-image.jpg"

export const DetailContainer = styled.div`
  height: 100vh;
  color: ${(props) => props.theme.colors.text};
  
  background-image: url(${detailImage});
  background-size: cover;
  
`;

/* export const PokemonContainer = styled.div`
  ${WidgetA};
  position: absolute;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1/1.41421356237;
  top: 3rem;
  left: 50%;
  height: calc(100vh - 10rem);
  transform: translateX(-50%);

  gap: 1.5rem;
  justify-content: space-between;
  padding: 2rem;
  
`; */

export const PokemonImage = styled.img`

  align-items: center;
  max-height: 475px;
  max-width: 475px;
  margin: auto;
  display:block;
`;

export const PokemonTitle = styled.h1`
  ${TitleA};
  ${WidgetA};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  width: 35%;
  left: 50%;
  top: 1%;
  padding-bottom: 0.3rem;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.secondary};
  overflow: auto;
  word-break: break-word;
  font-size: 50px;

  ${(props) =>
    props.ghost &&
    css`
      position: unset;
      opacity: 0%;
      pointer-events: none;
    `}
`;

export const PokemonId = styled.label`
  top: 20rem;
  color: ${(props) => props.theme.colors.grayed};
  text-align: center;
  font-size: 1.6rem;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: grid;
  gap: 1.5rem;
  align-items:center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  width: 27rem;
  overflow-x: auto;
  overflow-y: hidden;

  ${(props) =>
    props.labelCount > 2 &&
    css`
      padding-bottom: 1rem;
      justify-content: flex-start;
    `}
`;

export const Label = styled.img`
  width: 8rem;
`;

export const StatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export const Stat = styled.label`
  ${WidgetA};
  font-size: 1.5rem;
  text-align: center;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
  padding: 0.3rem;
`;
