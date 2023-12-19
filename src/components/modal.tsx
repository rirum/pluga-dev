import styled from 'styled-components';
import { Tool } from './search';

type ModalProps = {
  tool: Tool;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ tool, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ChosenApp>
          <AppLogo color={tool.color}>
            <img src={tool.icon} alt={tool.name}></img>
          </AppLogo>
          <AppInfo>
            <h2>{tool.name}</h2>
            <button>ACESSAR</button>
          </AppInfo>
        </ChosenApp>
        <LastSeenApps>
          <p>ÚLTIMAS FERRAMENTAS VISUALIZADAS</p>
        </LastSeenApps>

        <button onClick={onClose}>Fechar</button>
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
  background: rgba(0, 0, 0, 0.5);
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
  background-color: pink;
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
    width: 300px;
    height: 40px;
    background-color: red;
    font-size: 20px;
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
  background-color: paleturquoise;
`;
export default Modal;
