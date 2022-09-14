import styled from "styled-components";

export const ReviewsWrapper = styled.div`
display: grid;
gap: 16px;
 grid-template-columns: repeat(auto-fit);
`

export const ReviewCard = styled.div`
display: block;
width: 100%
`
export const Content = styled.p`
font-style: italic;
font-size: 24px;
padding: 16px;
`
export const Author = styled.p`
font-size: 24px;
padding: 8px;
font-weight: 500;
border-bottom: 1px solid grey;
`