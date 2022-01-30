import styled from "styled-components"


const Card = styled.div`
  background-color: ${(props) =>
props.variant === "outline" ? "white" : "#87AAAA"};
  //color: ${(props) => (props.variant === "outline" ? "goldenrod" : "white")};
  
margin:10px;
padding:10px;
border: 2px solid #D9534F;
border-radius: 15px
`;
const CardOne = styled.div`
  background-color: ${(props) =>
props.variant === "outline" ? "red" : "#D3E4CD"};
  color: ${(props) => (props.variant === "outline" ? "goldenrod" : "black")};
  
margin:10px;
padding:10px;
border: 2px solid #66806A;
border-radius: 15px
`;
const CardDescription = styled.div`
    display:none;
    position: absolute;
    top:0;
    start:0;
    padding: 4px;
    border-radius: 5px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    width: 100%;
    height: 100%;
`
const CardSec = styled.div`
    display:inline-block;
    white-space:normal;
    margin: 5px 10px;
    vertical-align:middle;
    white-space:normal;
    &:hover ${CardDescription} {
        display: flex;
        text-align: start;
      }
`
export const CastCard = styled.div`
    position:block;
    display:inline-block;
    white-space:normal;
    margin: 4px;
    vertical-align:middle;
    white-space:normal;
    align-items: start;
`
export const CastCardDescription = styled.div`
   max-width: 100px;
   font-size: 12px;
`

export {Card,CardOne,CardDescription,CardSec}