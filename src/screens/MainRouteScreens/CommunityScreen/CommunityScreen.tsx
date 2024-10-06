import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { samplePosts } from '@vs/data';
import ReactNativeModal from 'react-native-modal';
import { TextInput } from 'react-native-paper';
import { HTTPService } from './../../../services/HTTP.service';
import { MinuteTimer } from '../VoiceAnalysisScreen/MinuteTimer';
import { NatureSvg } from '@vs/assets';
import ConfettiCannon from 'react-native-confetti-cannon';
import Toast from 'react-native-toast-message';

export const CommunityScreen = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [stressedModalVisibility, setStressedModalVisibility] = useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const handleSubmit = async () => {
    const prediction = await HTTPService.analyzePostText(post);
    setTitle('');
    setPost('');
    setModalVisibility(false);
    if (prediction.prediction == 1) {
      setStressedModalVisibility(true);
    } else {
      setShowConfetti(true);
      Toast.show({ type: 'success', text1: 'ඔබ ආතතියෙන් තොරයි' });
    }
  };
  return (
    <View style={tw`flex-1`}>
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          autoStart={true}
          fadeOut={true}
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}
      <ReactNativeModal
        backdropColor="#000000"
        backdropOpacity={0.9}
        coverScreen={false}
        isVisible={modalVisibility}
        onBackdropPress={() => setModalVisibility(false)}>
        <View
          style={tw`flex-1 justify-center items-center bg-opacity-50 bg-black p-4`}>
          <View style={tw`bg-white p-4 rounded-lg w-full`}>
            <Text style={tw`text-lg font-bold mb-4`}>Create a Post</Text>
            <TextInput
              style={tw`border border-gray-300 rounded-lg p-2 mb-4`}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={tw`border border-gray-300 rounded-lg p-2 mb-4`}
              placeholder="Post"
              multiline={true}
              numberOfLines={4}
              value={post}
              onChangeText={setPost}
            />
            <TouchableOpacity
              style={tw`bg-blue-500 text-white py-2 px-4 rounded-lg`}
              onPress={handleSubmit}>
              <Text style={tw`text-center text-white `}>post </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisibility(false)}
              style={tw`mt-2 bg-red-500  py-2 px-4 rounded-lg`}>
              <Text style={tw`text-center text-white `}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>

      <ScrollView>
        {samplePosts.map((post, index) => (
          <View key={index} style={tw`p-4 border-b border-gray-300`}>
            <Text style={tw`text-lg font-bold`}>{post.title}</Text>
            <Text style={tw`text-sm text-gray-500 mb-2`}>{post.date}</Text>
            <Text style={tw`text-base mb-4`}>{post.content}</Text>
            <View style={tw`flex-row justify-between items-center`}>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Text style={tw`text-blue-500 mr-2`}>{post.likes}</Text>
                <Text style={tw`text-gray-500`}>Likes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-row items-center`}>
                <Text style={tw`text-gray-500 mr-2`}>{post.date}</Text>
                <Text style={tw`text-gray-500`}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Add a button to navigate to the new post screen */}
      <TouchableOpacity
        onPress={() => setModalVisibility(true)}
        style={tw`bg-[#199169] p-4 absolute bottom-0 right-0 rounded-full m-4`}>
        <Text style={tw`text-white`}>Add your thoughts</Text>
      </TouchableOpacity>
    </View>
  );
};
