import { useRef,useEffect, useState} from 'react';
import { ModalOverlay, ModalContent, ChosenApp, AppLogo, AppInfo, LastSeenApps, LastSeenText, WrapperTextAndMiniCards, LastSeenAppsCards, LastSeenAppLogo, LastSeenAppName, StyledLink } from './styles';
import { Tool, ModalProps } from '@/types/tools';


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
                <LastSeenAppsCards key={seenTool.id} >
                  {seenTool.link ? (
              <div>
                <StyledLink href={seenTool.link} target="_blank" rel="noopener noreferrer">
                <LastSeenAppLogo color={seenTool.color}>
                  <img src={seenTool.icon} alt={seenTool.name} />
                </LastSeenAppLogo>
                <LastSeenAppName>
                  
                    <p>{seenTool.name}</p>
                 
                </LastSeenAppName>
                </StyledLink>
              </div>
            ) : (
              <div>
                <LastSeenAppLogo color={seenTool.color} key={seenTool.id}>
                  <img src={seenTool.icon} alt={seenTool.name} />
                </LastSeenAppLogo>
                <LastSeenAppName>
                  <p>{seenTool.name}</p>
                </LastSeenAppName>
                <p>Ferramenta sem link</p>
              </div>
            )}
    </LastSeenAppsCards>
  ))}
          </WrapperTextAndMiniCards>
        </LastSeenApps>
          
          

       
      </ModalContent>
    </ModalOverlay>
  );
};


export default Modal;
