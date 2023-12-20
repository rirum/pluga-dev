import styled from "styled-components";

export const Background = styled.div`
font-family: 'Roboto', sans-serif;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

`

export const CardsWrapper = styled.div`
width: 1190px;
height: auto;
display: flex;
flex-wrap: wrap;
margin-bottom: 40px;
 
`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  bottom: 0;
  button {
    cursor: pointer;
    padding: 8px 16px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 0 8px;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;