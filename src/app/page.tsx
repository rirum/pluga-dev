'use client';


import Card from '@/components/card';
import SearchBar from '@/components/search';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchToolsData } from '@/services/api';



export default function Home() {
  const [toolsData, setToolsData] = useState<Array<{ id: number }>>([]);
  const [filteredTools, setFilteredTools] = useState<Array<{ id: number }>>([]);
  const [loading, setLoading]= useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;


  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await fetchToolsData();
        console.log(data);
        setToolsData(data);
        setFilteredTools(data);
        setLoading(false);
      }
      catch(error){
        console.log(error);

      }
    }
    fetchData();
  }, []);

  const totalItems = filteredTools.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTools = filteredTools.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
     <Background>
        <SearchBar></SearchBar>
        <CardsWrapper>
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentTools.map((tool) => <Card key={tool.id} tool={tool} />)
          )}
        </CardsWrapper>
        <Pagination>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </Pagination>
      </Background>
   
    </>
  )
}


const Background = styled.div`
font-family: 'Roboto', sans-serif;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

`

const CardsWrapper = styled.div`
width: 1190px;
height: auto;
display: flex;
flex-wrap: wrap;
margin-bottom: 40px;
 
`

const Pagination = styled.div`
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