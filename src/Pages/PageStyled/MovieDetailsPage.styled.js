import styled from "styled-components";
import {Link } from "react-router-dom";

export const MovieWrapper = styled.div`
display: flex;
padding: 32px 32px;
`
export const Poster = styled.img`
width: 400px;
margin-right: 30px;
`;

export const DetailsWrapper = styled.div`
display: flex;
flex-direction: column;
width: 800px;
`

export const Title = styled.h1`
text-align: center;
font-size: 46px;
padding: 16px;
`
export const Tagline = styled.h2`
font-style: italic;
text-align: center;
padding: 16px;
`

export const Overview = styled.p`
display: block;
font-size: 24px;
padding: 16px;
`
export const LinkList = styled.ul`
display: flex;
flex-grow: 2;
justify-content: space-evenly;
align-items: flex-end;
text-align: center;
margin: 0px;
padding: 0px;
`

export const DetailsLink = styled(Link)`
display: block;
width: 250px;
font-size: 24px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid orangered;
  &:hover,
  &:focus {
    color: white;
    background-color: orangered;
  }
`;