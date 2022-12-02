/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import checkUserAnswer from '../../services/checkUserAnswer';
import { playerStringToAsterisk } from '../../services/transformPlayerName';
import PlayerIcon from '../Avatar';
import { finishGame, incrementController } from '../Game/scoreSlice';
import { GameFinishModal } from '../GameEndingModal';

type ModalProps = {
  player: string;
};
function ModalGame({ player }: ModalProps) {
  // redux
  const dispatch = useAppDispatch();
  const { gameIndex, gameFinished } = useAppSelector(
    (state) => state.persistedReducer.counter.gameController,
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [trysArray, setTrysArray] = useState<string[]>([]);
  useEffect(() => {
    gameIndex === 11 ? dispatch(finishGame()) : '';
  }, [dispatch, gameIndex]);
  function handleChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void {
    if (checkUserAnswer(player, value)) {
      setIsCorrect(true);
      onClose(); // Close Modal
      dispatch(incrementController());
      return;
    }
    value.length === player.length
      ? setTrysArray((prevState) => [...prevState, value])
      : '';
  }
  return (
    <>
      <PlayerIcon onOpen={onOpen} correct={isCorrect} player={player} />
      <GameFinishModal gameStatus={gameFinished} onOpen={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isCorrect ? player : playerStringToAsterisk(player)}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Digite aqui o jogador</FormLabel>
              <Input placeholder="Nome do jogador" onChange={handleChange} />
            </FormControl>
            <h1>Tentativas</h1>
            {
              <div>
                {trysArray.map((att) => (
                  <p key={att}>{att}</p>
                ))}
              </div>
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalGame;
