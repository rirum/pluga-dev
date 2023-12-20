import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  width: 800px;
  height: 600px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ChosenApp = styled.div`
  width: 100%;
  height: 300px;
 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppLogo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
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

export const AppInfo = styled.div`
  margin-left: 40px;
  h2 {
    color: #707070;
    font-size: 25px;
    margin-left: 10px;
  }
  button {
    width: 200px;
    height: 40px;
    border-radius: 40px;
    margin-top: 15px;
    border: none;
    cursor: pointer;
  }
`;

export const LastSeenApps = styled.div`
  width: 100%;
  height: 300px;
  
  display: flex;
  flex-direction: column;

`;

export const LastSeenText = styled.div`
  p{
    font-size: 20px;
    margin-left: 50px;
    margin-top: 10px;
    color: #707070;
  }
`
export const WrapperTextAndMiniCards = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const LastSeenAppsCards = styled.div`
  width: 200px;
  height: 230px;
  border: 1px solid #707070;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`

export const LastSeenAppLogo = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color || '#EFEFEF'};
  border-radius: 75px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`

export const LastSeenAppName = styled.div`
display: flex;
align-items: center;
justify-content: center;
  p{
    font-size: 15px;
    color: #707070;
    margin-top: 30px;
  }

`

export const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  
`
