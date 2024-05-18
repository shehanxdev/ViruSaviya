import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { samplePosts } from '@vs/data';

export const CommunityScreen = () => {
  return (
    <View style={tw`flex-1`}>
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
        style={tw`bg-[#199169] p-4 absolute bottom-0 right-0 rounded-full m-4`}>
        <Text style={tw`text-white`}>සිතුවිලි එකතු කරන්න</Text>
      </TouchableOpacity>
    </View>
  );
};
