

import Card from '@/components/Card';
import SearchBar from '@/components/Search';
import { useState, useEffect } from 'react';
import { fetchToolsData } from '@/services/api';
import { Tool, HomeProps } from '@/types/tools';
import { Background, CardsWrapper, Pagination } from "../../styles/home.styles"

export default function Home({}: HomeProps){
  const [toolsData, setToolsData] = useState<Tool[]>([]);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [loading, setLoading]= useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;


  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await fetchToolsData();
        
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

  const handleSearch = (searchTerm: string) => {
   
    const filtered = toolsData.filter((tool) =>
      
    tool.name !== undefined && tool.name.toLowerCase().includes(searchTerm.toLowerCase())
      
    );
    
    setFilteredTools(filtered);
    setCurrentPage(1);
  };
    return(
        <Background>
        <SearchBar onSearch={handleSearch}></SearchBar>
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
   
    )
}