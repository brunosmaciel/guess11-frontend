export type GameDatum = {
  id: number;
  attributes: {
    matchDescription?: string;
    player1: string;
    player2: string;
    player3: string;
    player4: string;
    player5: string;
    player6: string;
    player7: string;
    player8: string;
    player9: string;
    player10: string;
    player11: string;
    tactialScheme?: number;
    createdAt?: string;
    updatedAt?: string;
  };
};
export const gameDatum: GameDatum[] = [
  {
    id: 1,
    attributes: {
      matchDescription: 'Internacional 2 a 0 Athetico-PR',
      player1: 'Keiller',
      player2: 'Bustos',
      player3: 'Vitao',
      player4: 'Mercado',
      player5: 'Rene',
      player6: 'Johnny',
      player7: 'De Pena',
      player8: 'Alan Patrick',
      player9: 'Mauricio',
      player10: 'Pedro Henrique',
      player11: 'Alemao',
      tactialScheme: 4231,
      createdAt: '2022-11-08T13:43:04.131Z',
      updatedAt: '2022-11-08T13:43:04.131Z',
    },
  },
  {
    id: 2,
    attributes: {
      matchDescription: 'Lorem ipsun dolor test game',
      player1: 'Zezinho',
      player2: 'Huginho',
      player3: 'Luizinho',
      player4: 'Peixonauta',
      player5: 'Ben 10',
      player6: 'Kevin',
      player7: 'MC Daniel',
      player8: 'Kante',
      player9: 'Salah',
      player10: 'Darwin Nunez',
      player11: 'Pele',
      tactialScheme: 433,
      createdAt: '2022-11-09T12:44:09.790Z',
      updatedAt: '2022-11-09T12:44:09.790Z',
    },
  },
];
