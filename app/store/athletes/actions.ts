import { ThunkDispatch } from 'redux-thunk';
import { AppState } from 'types/common';
import { fetchAthlete, fetchAthleteResults } from 'services/athletes';
import { AthleteReducerConstants } from 'types/athletes';

const fetchAthleteAction = (athleteId: number) => {
  return (dispatch: ThunkDispatch<AppState, void, any>) => {
    return dispatch({
      types: [
        AthleteReducerConstants.ATHLETE_FETCH_REQUEST,
        AthleteReducerConstants.ATHLETE_FETCH_SUCCESS,
        AthleteReducerConstants.ATHLETE_FETCH_FAIL,
      ],
      asyncRequest: {
        request: () => {
          return fetchAthlete(athleteId);
        },
      },
    });
  };
};

const fetchAthleteResultsAction = (athleteId: number) => {
  return (dispatch: ThunkDispatch<AppState, void, any>) => {
    return dispatch({
      types: [
        AthleteReducerConstants.ATHLETE_RESULTS_FETCH_REQUEST,
        AthleteReducerConstants.ATHLETE_RESULTS_FETCH_SUCCESS,
        AthleteReducerConstants.ATHLETE_RESULTS_FETCH_FAIL,
      ],
      asyncRequest: {
        request: () => {
          return fetchAthleteResults(athleteId);
        },
      },
    });
  };
};

export { fetchAthleteAction, fetchAthleteResultsAction };