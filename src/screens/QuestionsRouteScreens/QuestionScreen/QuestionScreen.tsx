import React, { useRef, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Progress, Text } from 'native-base';
import tw from 'twrnc';

import { initialQuestions } from '@vs/data';
import { Button } from '@vs/components';
import { colors, strings } from '@vs/constants';
import { RadioButton } from 'react-native-paper';

export const QuestionScreen: React.FC = () => {
  const [questionNumber, setquestionNumber] = useState<number>(1);
  const [chosenAnswer, setChosenAnswer] = useState<string>('');
  const selectedAnswers = useRef<string[]>(new Array(initialQuestions.length));

  const navigateToNextQuestion = () => {
    setquestionNumber(questionNumber + 1);
  };

  const navigateToPreviousQuestion = () => {
    setquestionNumber(questionNumber - 1);
  };
  const addToAnswerList = (answer: string) => {
    selectedAnswers.current[questionNumber - 1] = answer;
    console.log(selectedAnswers.current);
    setChosenAnswer(answer);
  };

  const getRadioButtons = (answers: string[]) => {
    return answers.map(answer => (
      <TouchableWithoutFeedback onPress={() => addToAnswerList(answer)}>
        <View style={tw`flex flex-row items-center`}>
          <RadioButton
            color={colors.black}
            onPress={() => addToAnswerList(answer)}
            status={chosenAnswer === answer ? 'checked' : 'unchecked'}
            value={answer}
          />
          <Text fontSize="md">{answer}</Text>
        </View>
      </TouchableWithoutFeedback>
    ));
  };

  const getProgress = (): number => {
    return (questionNumber / initialQuestions.length) * 100;
  };

  return (
    <View style={tw`flex-1 mx-5`}>
      <Progress style={tw`mt-4 `} value={getProgress()} colorScheme="success" />
      <View style={tw`flex content-between my-4 `}>
        <View style={tw`my-5`}>
          <Text style={tw`my-2`} fontSize="md">
            {initialQuestions[questionNumber - 1].question}
          </Text>

          {getRadioButtons(initialQuestions[questionNumber - 1].answers)}
        </View>
        <View style={tw`flex gap-4 mt-4`}>
          {questionNumber < initialQuestions.length && (
            <Button
              title={strings.ඉදිරියට}
              onPress={navigateToNextQuestion}></Button>
          )}
          {questionNumber > 1 && (
            <Button
              title={strings.පෙර}
              onPress={navigateToPreviousQuestion}></Button>
          )}
        </View>
      </View>
    </View>
  );
};
