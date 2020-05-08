import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, RouteType } from 'types/common';
import { fetchAthleteAction, fetchAthleteResultsAction } from 'store/athletes/actions';
import AthleteDetailComponent from './AthleteDetail.component';

type PropsType = {
  route: RouteType;
};

const AthleteDetailContainer = ({ route }: PropsType) => {
  const { athleteId } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAthleteAction(athleteId));
    dispatch(fetchAthleteResultsAction(athleteId));
  }, [athleteId]);

  const [
    athleteData,
    athleteResults,
  ] = useSelector(({ athlete }: AppState) => [
    athlete.athleteData,
    athlete.athleteResults,
  ]);

  return (
    <AthleteDetailComponent athleteData={athleteData} athleteResults={athleteResults} />
  );
};

export default AthleteDetailContainer;