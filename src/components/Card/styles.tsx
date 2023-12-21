import styled from "styled-components";

export const CardBackground = styled.div`
  width: 250px;
  height: 260px;
  background-color: #efefef;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
  cursor: pointer;
  transition: background-color 0.3;
  &:hover{
    background-color: #e0e0e0;
  }
`;

export const AppLogo = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: ${(props) => props.color || '#EFEFEF'};
  margin-top: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

export const AppText = styled.div`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  color: #707070;
`;
