import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const StyledSearch = styled.div`
  width: 1260px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #ddd;
  padding-left: 50px;
  border-radius: 5px;
  justify-content: center;

  input {
    height: 50px;
    width: 1000px;
    background-color: #ddd;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

    ::placeholder {
      font-size: 40px;
      color: #707070;
    }
  }

`;

export const StyledFaSearch = styled(FaSearch)`
  margin-right: 10px;
  font-size: 15px;
`;
