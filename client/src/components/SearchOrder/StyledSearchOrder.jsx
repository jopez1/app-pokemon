import styled from "styled-components";
import { WidgetA } from "../../css/DesignPatterns/WidgetA";

export const OrderContainer = styled.div`
  ${WidgetA};
  
  
  padding: 1rem;
  gap: 1rem;
  font-size: 1.1rem;
  padding: 1.5em;
  height: 1em;
  display: flex;
  justify-content: space-around;
  align-items: left;
  border: 0;
  width: 20%;
  position:absolute;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 6em;
  top: 1rem;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 0.5rem;
  gap: 0.5rem;
`;

export const Select = styled.select`
  font-family: "Signika";
  font-size: 0.9em;
`;

export const Option = styled.option`
  font-family: "Signika";
  font-size: 1.2em;
`;
