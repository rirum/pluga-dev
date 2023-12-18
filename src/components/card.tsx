import styled from "styled-components";

type CardProps = {
    tool: {
      id: number;
      icon?: string;
      name?: string;
    };
  };

const Card= ({tool}: CardProps) => {
    return(
        <>
        <CardBackground>
        <AppLogo>
            
            <img src={tool.icon} alt={tool.name} key={tool.id}></img>
            
          
        </AppLogo>
        <AppText>{tool.name}</AppText>
        </CardBackground>
       
        </>
    )
}

export default Card

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
    border-radius: 75px;
    background-color: #D8D8D8;
    margin-top: 30px;
    img{
       width: 100%;
       height: 100%;
        object-fit: cover;
        
    }
        
   
`


const AppText = styled.div`
    
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    color: #707070;
    
`