import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent, useState, MouseEvent } from "react";

type Tool = {
    id: number;
    icon?: string;
    name?: string;
  };
  
  type SearchBarProps = {
    tools: Tool[];
    onSearch: (searchTerm: string) => void;
  };
  

export default function SearchBar({tools, onSearch}: SearchBarProps){
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (onSearch){
            onSearch(searchTerm);
        }
    }
    return(
        <>
        <StyledSearch>
            <button onClick={handleSearch}>
            <StyledFaSearch/>
            </button>
       
             <input 
             placeholder="BUSCA FERRAMENTA"
             value={searchTerm}
             onChange={handleInputChange}></input>
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
