import { Button } from '@vs/components';
import { TextArea, View } from 'native-base';
import React, { useState } from 'react';
import tw from 'twrnc';

export const CommunityScreen = () => {
  const [text, setText] = useState('');

  const handleTextChange = (text: any) => {
    setText(text);
  };
  return (
    <View style={tw`flex-1 `}>
      <View style={tw`flex items-center my-10 gap-8`}>
        <TextArea
          value={text}
          h={20}
          placeholder="Add your thaughts"
          w="75%"
          maxW="300"
          autoCompleteType={''}
          onChange={event => handleTextChange(event.nativeEvent.text)}
        />
        <Button title="Analyze"></Button>
      </View>
    </View>
  );
};
