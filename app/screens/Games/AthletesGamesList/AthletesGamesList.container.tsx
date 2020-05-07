import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesAthletesAction } from 'store/games/actions';
import AthletesGamesListComponents from './AthletesGamesList.component';
import { AppState } from 'types/common';
import { Athlete } from 'types/athletes';

type PropsType = {
  gameId: number,
  navigateToAthleteScreen: (athleteId: number) => void;
};

const AthletesGamesListContainer = ({ gameId, navigateToAthleteScreen }: PropsType) => {
  const dispatch = useDispatch();

  const gameAthletes: Athlete[] = useSelector(({ games }: AppState): Athlete[] => {
    return games.athletesData[gameId];
  });

  useEffect(() => {
    dispatch(fetchGamesAthletesAction(gameId));
  }, [gameId]);

  return (
    <AthletesGamesListComponents
      gameAthletes={gameAthletes}
      navigateToAthleteScreen={navigateToAthleteScreen}
    />
  );
};

export default AthletesGamesListContainer;