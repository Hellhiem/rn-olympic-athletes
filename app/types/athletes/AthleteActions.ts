
import { Action } from 'redux';
import { Athlete, AthleteResult } from 'types/athletes';

enum AthleteReducerConstants {
  ATHLETE_FETCH_REQUEST = 'ATHLETE_FETCH_REQUEST',
  ATHLETE_FETCH_SUCCESS = 'ATHLETE_FETCH_SUCCESS',
  ATHLETE_FETCH_FAIL = 'ATHLETE_FETCH_FAIL',
  ATHLETE_RESULTS_FETCH_REQUEST = 'ATHLETE_RESULTS_FETCH_REQUEST',
  ATHLETE_RESULTS_FETCH_SUCCESS = 'ATHLETE_RESULTS_FETCH_SUCCESS',
  ATHLETE_RESULTS_FETCH_FAIL = 'ATHLETE_RESULTS_FETCH_FAIL',
}
interface AthleteFetchRequestType extends Action {
  type: AthleteReducerConstants.ATHLETE_FETCH_REQUEST;
}

interface AthleteFetchRequestSuccessType extends Action {
  type: AthleteReducerConstants.ATHLETE_FETCH_SUCCESS;
  response: {
    data: Athlete,
  };
}

interface AthleteFetchRequestFailType extends Action {
  type: AthleteReducerConstants.ATHLETE_FETCH_FAIL;
  error: string;
}

interface AthleteResultsFetchRequestType extends Action {
  type: AthleteReducerConstants.ATHLETE_RESULTS_FETCH_REQUEST;
}

interface AthleteResultsFetchRequestSuccessType extends Action {
  type: AthleteReducerConstants.ATHLETE_RESULTS_FETCH_SUCCESS;
  response: {
    data: AthleteResult[],
  };
}

interface AthleteResultsFetchRequestFailType extends Action {
  type: AthleteReducerConstants.ATHLETE_RESULTS_FETCH_FAIL;
  error: string;
}

type AthletesActionsType =
  AthleteFetchRequestType |
  AthleteFetchRequestSuccessType |
  AthleteFetchRequestFailType |
  AthleteResultsFetchRequestType |
  AthleteResultsFetchRequestSuccessType |
  AthleteResultsFetchRequestFailType;

export {
  AthleteReducerConstants,
  AthletesActionsType,
  AthleteFetchRequestType,
  AthleteFetchRequestSuccessType,
  AthleteFetchRequestFailType,
  AthleteResultsFetchRequestType,
  AthleteResultsFetchRequestSuccessType,
  AthleteResultsFetchRequestFailType,
};