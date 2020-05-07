import React, { useEffect } from 'react';
import { GameType } from 'types/games';
import { AppState } from 'types/common';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesAction } from 'store/games/actions';
import GamesScreen from './Games.component';

const GamesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesAction());
  });

  const games: GameType[] = useSelector(({ games }: AppState) => games.data);

  return (
    <GamesScreen games={games} />
  );
};

export default GamesContainer;