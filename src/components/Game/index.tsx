import { useAppSelector } from '../../app/store/hooks';
import { gameDatum } from '../../mockups/gameDatum';
import ModalGame from '../GameModal';
import { Container, PlayersFlexContainer, PlayersGrid } from './styled';
const Game = () => {
  const gameController = useAppSelector(
    (state) => state.persistedReducer.counter.gameController,
  );
  const newObj = { ...gameDatum[0].attributes };
  const goalkeeper = [newObj.player1];
  const firstLine = [newObj.player2, newObj.player3, newObj.player4, newObj.player5];
  const secondLine = [newObj.player6, newObj.player7];
  const thirLine = [newObj.player8, newObj.player9, newObj.player10];
  const forthLine = [newObj.player11];
  return (
    <Container>
      <PlayersFlexContainer>
        <PlayersGrid lineSize={1}>
          {goalkeeper.map((gk) => (
            <ModalGame key={gk} player={gk} />
          ))}
        </PlayersGrid>
        <PlayersGrid lineSize={4}>
          {firstLine.map((player) => (
            <ModalGame key={player} player={player} />
          ))}
        </PlayersGrid>
        <PlayersGrid lineSize={2}>
          {secondLine.map((player) => (
            <ModalGame key={player} player={player} />
          ))}
        </PlayersGrid>
        <PlayersGrid lineSize={3}>
          {thirLine.map((player) => (
            <ModalGame key={player} player={player} />
          ))}
        </PlayersGrid>
        <PlayersGrid lineSize={1}>
          {forthLine.map((player) => (
            <ModalGame key={player} player={player} />
          ))}
        </PlayersGrid>
      </PlayersFlexContainer>
    </Container>
  );
};

export default Game;
