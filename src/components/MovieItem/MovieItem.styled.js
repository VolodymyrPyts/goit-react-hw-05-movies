import styled from "styled-components";

export const Container = styled.div`
margin-top: 32px;
  display: flex;
  flex-wrap: wrap; 
  gap: 16px;
    
`;

export const Wrapper = styled.div`
margin-bottom: 16px;
flex-basis: calc((100% - 48px) / 3);
border: 1px solid grey;
border-radius: 4px;
cursor: pointer;
transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
          0px 1px 1px rgba(0, 0, 0, 0.12);
      transform: scale(1.03);
  }
> a {
  text-decoration: none;
}
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;