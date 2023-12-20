import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, useState, MouseEvent } from 'react';

export type Tool = {
  id: number;
  icon?: string;
  name?: string;
  color?: string;
  link?: string;
};

type SearchBarProps = {
  tools: Tool[];
  onSearch: (searchTerm: string) => void;
};

export default function SearchBar({ tools, onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [listSearch, setListSearch] = useState<Tool[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      const list = tools.filter((tool) =>
        tool.name?.toLowerCase().includes(value.toLowerCase())
      );
      setListSearch(list);
      onSearch(value);
    } else {
      setListSearch([]);
    }
  };

  const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onSearch && searchTerm.length >= 3) {
      onSearch(searchTerm);
    }
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <StyledSearch>
        <button onClick={handleSearch}>
          <StyledFaSearch />
        </button>

        <input
          placeholder="BUSCA FERRAMENTA"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKey}
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

const StyledSearch = styled.div`
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
  button {
    background-color: transparent;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    cursor: pointer;
  }
`;

const StyledFaSearch = styled(FaSearch)`
  margin-right: 10px;
  font-size: 15px;
`;
