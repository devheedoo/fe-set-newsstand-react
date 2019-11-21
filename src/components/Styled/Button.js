import styled from "styled-components";

export const Button = styled.button`
  border: none;
  width: 44px;
  height: 44px;
  cursor: pointer;

  color: ${props => (props.active ? "#333" : "#ccc")};
`;
