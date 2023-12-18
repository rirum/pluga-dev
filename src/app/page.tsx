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


  return (
    <>
    <Background>
      <SearchBar></SearchBar>
      <CardsWrapper>
      {loading ? (
            <p>Loading...</p>
          ) : (
            filteredTools.map((tool) => <Card key={tool.id} tool={tool} />)
          )}
      </CardsWrapper>
  
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
height: 300px;
display: flex;
flex-wrap: wrap;



 
`