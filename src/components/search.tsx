import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export default function SearchBar(){
    return(
        <>
        <StyledSearch>
            <button>
            <StyledFaSearch/>
            </button>
       
             <input placeholder="BUSCA FERRAMENTA"></input>
        </StyledSearch>
        </>
    )
}

const StyledSearch = styled.div`
   width: 1260px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #DDD;
    padding-left: 50px;
    border-radius: 5px;
    justify-content: center;
        input{
            height: 50px;   
            background-color: #DDD;
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
          
            ::placeholder{
                    font-size: 40px;
                    color: #707070;
                }
        }  
        button{
            background-color: transparent;
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
            cursor: pointer;
        }
`

const StyledFaSearch = styled(FaSearch)`
    margin-right: 10px;
    font-size:15px;
`
