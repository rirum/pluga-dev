import styled from "styled-components";
import { Tool } from "./search";

type ModalProps = {
    tool: Tool; 
    onClose: () => void;
  };

  const Modal: React.FC<ModalProps> = ({ tool, onClose }) => {
    return (
      <ModalOverlay>
        <ModalContent>
          <h2>{tool.name}</h2>
          <p>Icon: {tool.icon}</p>
        
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
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  `;
  
  export default Modal;