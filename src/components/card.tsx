import styled from "styled-components";

export default function Card(){
    return(
        <>
        <CardBackground>
        <AppLogo></AppLogo>
        <AppText>RD STATION MANAGER</AppText>
        </CardBackground>
       
        </>
    )
}

const CardBackground = styled.div`
    width: 250px;
    height: 260px;
    background-color: #EFEFEF;
    border: 1px solid #DFDFDF ;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left:20px;
    margin-right: 20px;
    margin-top: 40px;
`

const AppLogo = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: pink;
    margin-top: 30px;
`
const AppText = styled.div`
    width: 190px;
    margin-top: 30px;
    align-items: center;
    color: #707070;
    
`