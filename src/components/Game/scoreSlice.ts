import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
type GameReducer = {
  score: number;
  gameController: {
    gameIndex: number;
    gameStarted: boolean;
    gameFinished: boolean;
  };
  players: {
    player1?: string;
    player2?: string;
    player3?: string;
    player4?: string;
    player5?: string;
    player6?: string;
    player7?: string;
    player8?: string;
    player9?: string;
    player10?: string;
    player11?: string;
  };
};

const EXPIRE_TIME = 172800000;
const initialState: GameReducer = {
  score: 1000,
  gameController: {
    gameIndex: 0,
    gameStarted: false,
    gameFinished: false,
  },
  players: {},
};

export const scoreControllerSlice = createSlice({
  name: 'gameReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementController(state) {
      state.gameController.gameIndex += 1;
    },
    setScore(state, { payload }: PayloadAction<number>) {
      state.score += payload;
    },
    reset() {
      return initialState;
    },
    startGame(state) {
      state.gameController.gameStarted = true;
    },
    finishGame(state) {
      state.gameController.gameFinished = true;
    },
  },
});

export const { incrementController, setScore, reset, startGame, finishGame } =
  scoreControllerSlice.actions;

export default scoreControllerSlice;
