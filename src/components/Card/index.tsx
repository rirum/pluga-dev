import { useState } from 'react';
import Modal from '../Modal';
import { CardBackground, AppLogo, AppText } from './styles';
import { CardProps } from '@/types/tools';


const Card = ({ tool }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardBackground onClick={handleOpenModal}>
        <AppLogo color={tool.color}>
          <img src={tool.icon} alt={tool.name} key={tool.id}></img>
        </AppLogo>
        <AppText>{tool.name}</AppText>
      </CardBackground>

      {isModalOpen && <Modal tool={tool} onClose={handleCloseModal} />}
    </>
  );
};

export default Card;

