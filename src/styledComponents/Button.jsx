import styled from "styled-components";


const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "#D3DEDC"};
  color: ${(props) => (props.variant === "outline" ? "goldenrod" : "white")};
  &:hover {
    color: black;
  }
margin:10px;
padding:10px;
border: 2px solid #DD4A48;
border-radius:  15px
`;

const SecondaryButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "#D3DEDC"};
  color: ${(props) => (props.variant === "outline" ? "goldenrod" : "#DD4A48")};
  &:hover {
    color: #325288;
  }
margin:10px;
padding:10px;
border: 2px solid #DD4A48;
border-radius:  15px
`;
const ThirdButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "#D3DEDC"};
  color: ${(props) => (props.variant === "outline" ? "goldenrod" : "#D77FA1")};
  &:hover {
    color: #313552;
  }
margin:10px;
padding:10px;
border: 2px solid #1572A1;
border-radius:  15px
`;

export {Button, SecondaryButton, ThirdButton}  ;
