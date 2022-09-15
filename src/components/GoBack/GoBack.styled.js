import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 32px;
  padding: 16px 32px;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 4px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 32px;
  :hover {
    background-color: orangered;
    border: 1px solid orangered;
  }
`;