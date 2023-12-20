import styled from 'styled-components';
import { Tool } from './search';
import { useRef,useEffect, useState} from 'react';

type ModalProps = {
  tool: Tool;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ tool, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [viewedTools, setViewedTools] = useState<Tool[]>([]);


  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
  
      
      const viewedToolsFromStorage = JSON.parse(localStorage.getItem('viewedTools') || '[]');
      const updatedTools = [tool, ...viewedToolsFromStorage].slice(0, 3);
      localStorage.setItem('viewedTools', JSON.stringify(updatedTools));
    }
  };
  



  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
  
    const viewedToolsFromStorage = JSON.parse(localStorage.getItem('viewedTools') || '[]');
    setViewedTools(viewedToolsFromStorage);
  }, []);
 


  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>
        <ChosenApp>
          <AppLogo color={tool.color}>
            <img src={tool.icon} alt={tool.name}></img>
          </AppLogo>
          <AppInfo>
            <h2>{tool.name}</h2>
            <a href={tool.link} target="_blank" rel="noopener noreferrer">
            <button>ACESSAR</button>
            </a>
          </AppInfo>
        </ChosenApp>
        <LastSeenApps>
        <LastSeenText>
            <p>ÚLTIMAS FERRAMENTAS VISUALIZADAS</p>
              </LastSeenText>
              <WrapperTextAndMiniCards>
              {viewedTools.map((seenTool) => (
  <LastSeenAppsCards key={seenTool.id}>
    <LastSeenAppLogo color={seenTool.color}>
      <img src={seenTool.icon} alt={seenTool.name} />
    </LastSeenAppLogo>
    <LastSeenAppName>
      <p>{seenTool.name}</p>
    </LastSeenAppName>
  </LastSeenAppsCards>
))}
          </WrapperTextAndMiniCards>
        </LastSeenApps>
          
          

       
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 800px;
  height: 600px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ChosenApp = styled.div`
  width: 100%;
  height: 300px;
 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppLogo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.color || '#EFEFEF'};
  margin-top: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

const AppInfo = styled.div`
  margin-left: 40px;
  h2 {
    color: #707070;
    font-size: 25px;
    margin-left: 10px;
  }
  button {
    width: 200px;
    height: 40px;
    border-radius: 40px;
    margin-top: 15px;
    border: none;
  }
`;

const LastSeenApps = styled.div`
  width: 100%;
  height: 300px;
  
  display: flex;
  flex-direction: column;

`;

const LastSeenText = styled.div`
  p{
    font-size: 20px;
    margin-left: 50px;
    margin-top: 10px;
    color: #707070;
  }
`
const WrapperTextAndMiniCards = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const LastSeenAppsCards = styled.div`
  width: 200px;
  height: 230px;
  border: 1px solid #707070;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`

const LastSeenAppLogo = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color || '#EFEFEF'};
  border-radius: 75px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`

const LastSeenAppName = styled.div`
  p{
    font-size: 15px;
    color: #707070;
    margin-top: 30px;
  }
`

export default Modal;
