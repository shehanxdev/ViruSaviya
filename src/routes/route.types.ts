//*Note: extend param list as requirements change

import { DoctorCardProps } from '@vs/screens';

export type RootStackParamList = {};

export type MainStackParamList = RootStackParamList & {
  HomeScreen: {};
  CommunityScreen: {};
  QuestionsStack: {};
  SleepTrackerScreen: {};
  QuestionScreenWithinMainStack: {};
  AppoinmentStack: {};
};

export type QuestionStackParamList = RootStackParamList & {
  WelcomeScreen: { id: string };
  QuestionScreen: {};
  MainStack: {};
};

export type SleepAnalysisParamList = RootStackParamList & {
  SleepTimerScreen: {};
  SleepAnalyticsScreen: {};
};

export type GoalDiaryParamList = RootStackParamList & {
  GoalDiaryListScreen: {};
  CreateGoalDiaryScreen: {};
};
export type AppoinmentStackParamList = RootStackParamList & {
  CurrentAppoinmentListScreen: {};
  AddAppoinmentScreen: {};
  DoctorListScreen: {};
  DoctorProfileScreen: { doctor: DoctorCardProps };
};
