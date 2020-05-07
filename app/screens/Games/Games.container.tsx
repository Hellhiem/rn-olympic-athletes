import React, { useEffect } from 'react';
import { GameType } from 'types/games';
import { AppState, NavigationType, NavigationRoutes } from 'types/common';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesAction } from 'store/games/actions';
import GamesScreen from './Games.component';

type PropsType = {
  navigation: NavigationType;
};

const GamesContainer = ({ navigation }: PropsType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesAction());
  });

  const navigateToAthleteScreen = (athleteId: number) => {
    navigation.navigate(NavigationRoutes.Athlete, { athleteId });
  };

  const games: GameType[] = useSelector(({ games }: AppState) => games.gamesData);

  return (
    <GamesScreen games={games} navigateToAthleteScreen={navigateToAthleteScreen} />
  );
};

export default GamesContainer;