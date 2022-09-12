import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding-left: 32px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 32px;
  :hover {
    color: orangered;
  }
`;