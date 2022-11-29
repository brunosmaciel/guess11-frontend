import { useNavigate } from 'react-router-dom';

import {
  ModalOverlay,
  Modal,
  ModalContent,
  useDisclosure,
  ModalBody,
  Button,
  FormLabel,
} from '@chakra-ui/react';

import { useAppDispatch } from '../../app/store/hooks';
import { reset } from '../Game/scoreSlice';
export interface GameFinishedProps {
  gameStatus: boolean;
  onOpen: () => void;
}
export function GameFinishModal({ gameStatus }: GameFinishedProps) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
  );

  const { onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(reset());
    navigate('/game');
    window.location.reload();
  }
  return (
    <>
      <Modal isCentered isOpen={gameStatus} onClose={onClose}>
        <OverlayOne />
        <ModalContent>
          <ModalBody pb={6}>
            <FormLabel>Voce acertou todos os jogadores</FormLabel>
            <Button onClick={handleClick}>Jogar novamente</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
