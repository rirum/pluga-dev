import { ChangeEvent, useState } from 'react';
import { StyledSearch, StyledFaSearch } from './styles';
import { Tool, SearchBarProps } from '@/types/tools';


export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [listSearch, setListSearch] = useState<Tool[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  

  return (
    <div style={{ position: 'relative' }}>
      <StyledSearch>
        
          <StyledFaSearch />
        

        <input
          placeholder="BUSCAR FERRAMENTA"
          value={searchTerm}
          onChange={handleInputChange}
         
        ></input>
      </StyledSearch>
      <ul
        style={{
          listStyleType: 'none',
          backgroundColor: 'white',
          zIndex: '1000',
          position: 'absolute',
          left: '0',
          top: '100%',
          width: '100%',
        }}
      >
        {listSearch.map((tool) => (
          <li
            key={tool.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginRight: '50px',
              marginTop: '10px',
              overflow: 'hidden',
              borderBottom: '1px solid #f5f5f5',
              paddingBottom: '5px',
              
            }}
          >
            <img
              src={tool.icon}
              alt={tool.name}
              style={{ width: '20px', height: '20px', borderRadius:'50%', objectFit: 'contain', marginRight: '5px', backgroundColor: tool.color }}
            ></img>
            <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
                >
                {tool.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

