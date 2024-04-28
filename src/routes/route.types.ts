//*Note: extend param list as requirements change

export type RootStackParamList = {};

export type MainStackParamList = RootStackParamList & {
  HomeScreen: {};
  CommunityScreen: {};
  QuestionsStack: {};
};

export type QuestionStackParamList = RootStackParamList & {
  WelcomeScreen: { id: string };
  QuestionScreen: {};
  MainStack: {};
};
