import { Athlete, AthleteResult } from '.';

type AthleteStateType = {
  isFetchingAthlete: boolean,
  isFetchingAthleteResult: boolean,
  athleteData: Athlete | {},
  athleteResults: AthleteResult[] | [],
};

export default AthleteStateType;