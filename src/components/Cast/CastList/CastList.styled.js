import styled from "styled-components";

export const CastWrapper = styled.div`
display: grid;
padding: 32px;
gap: 48px;
 grid-template-columns: repeat(auto-fit, 260px);
`

export const Photo = styled.img`
width: 260px;
`
export const Name = styled.p`
font-size: 24px;
font-weight: 500;
text-align: center;
padding: 8px;
`
export const Character = styled.p`
font-size: 24px;
font-style: italic;
text-align: center;
`