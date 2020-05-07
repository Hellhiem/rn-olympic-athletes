
import { Action } from 'redux';
import GameType from './GameType';
import { Athlete } from 'types/athletes';

enum GamesReducerConstants {
  GAMES_FETCH_REQUEST = 'GAMES_FETCH_REQUEST',
  GAMES_FETCH_SUCCESS = 'GAMES_FETCH_SUCCESS',
  GAMES_FETCH_FAIL = 'GAMES_FETCH_FAIL',
  GAMES_ATHLETES_FETCH_REQUEST = 'GAMES_ATHLETES_FETCH_REQUEST',
  GAMES_ATHLETES_FETCH_SUCCESS = 'GAMES_ATHLETES_FETCH_SUCCESS',
  GAMES_ATHLETES_FETCH_FAIL = 'GAMES_ATHLETES_FETCH_FAIL',
}
interface GamesAthletesFetchRequestType extends Action {
  type: GamesReducerConstants.GAMES_ATHLETES_FETCH_REQUEST;
}

interface GameAthletesFetchRequestSuccessType extends Action {
  type: GamesReducerConstants.GAMES_ATHLETES_FETCH_SUCCESS;
  response: {
    response: {
      data: Athlete[],
    };
    gameId: number;
  };
}

interface GamesAthletesFetchRequestFailType extends Action {
  type: GamesReducerConstants.GAMES_ATHLETES_FETCH_FAIL;
  error: string;
}

interface GamesFetchRequestType extends Action {
  type: GamesReducerConstants.GAMES_FETCH_REQUEST;
}

interface GameFetchRequestSuccessType extends Action {
  type: GamesReducerConstants.GAMES_FETCH_SUCCESS;
  response: {
    data: GameType[],
  };
}

interface GamesFetchRequestFailType extends Action {
  type: GamesReducerConstants.GAMES_FETCH_FAIL;
  error: string;
}

type GamesActionsType =
  GamesFetchRequestType |
  GameFetchRequestSuccessType |
  GamesFetchRequestFailType |
  GamesAthletesFetchRequestType |
  GameAthletesFetchRequestSuccessType |
  GamesAthletesFetchRequestFailType;

export {
  GamesActionsType,
  GamesReducerConstants,
  GamesFetchRequestType,
  GameFetchRequestSuccessType,
  GamesFetchRequestFailType,
  GamesAthletesFetchRequestType,
  GameAthletesFetchRequestSuccessType,
  GamesAthletesFetchRequestFailType,
};