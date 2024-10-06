import { Text, View } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, PermissionsAndroid, Platform, ScrollView } from 'react-native';
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  OutputFormatAndroidType
} from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';

import { Button } from '@vs/components';

import tw from 'twrnc';

import ReactNativeModal from 'react-native-modal';
import { NatureSvg, VoiceAnalyzeSvg } from '@vs/assets';
import { MinuteTimer } from './MinuteTimer';
import { HTTPService } from './../../../services/HTTP.service';
import ConfettiCannon from 'react-native-confetti-cannon';
import Toast from 'react-native-toast-message';

export const VoiceAnalysisScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
  const savedPath = useRef('');
  const [clicked, setClicked] = useState(0);
  const [diagnosis, setDiagnosis] = useState<number>(-1);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [audioFrequency, setAudioFrequency] = useState(0);
  const [showConfetti, setShowConfetti] = React.useState(false);

  const audioSet: AudioSet = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS
  };
  const checkPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  const startRecording = async () => {
    if (!isRecording) {
      try {
        const path = `${RNFS.DocumentDirectoryPath}/record.mp3`;
        const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
        savedPath.current = uri;
        setIsRecording(true);
        console.log('Recording started and saved at ' + uri);
      } catch (error) {
        console.error('Failed to start recording', error);
        Alert.alert('Error', 'Failed to start recording');
      }
    } else {
      console.log('Already recording');
    }
  };
  const savedAudioFile = '';
  const stopRecording = async () => {
    if (isRecording) {
      try {
        const result = await audioRecorderPlayer.stopRecorder();
        setIsRecording(false);
        console.log('Recording stopped');

        // Fetch audio file from emulator storage
        //const audioFile = await RNFS.readFile(savedPath.current, 'base64');

        // Save audio file in project directory
        //const projectDir = RNFS.DocumentDirectoryPath;
        // const filePath = `${projectDir}/sound.mp3`;
        // await RNFS.writeFile(filePath, audioFile, 'base64');

        console.log('Audio file saved in project directory:');
      } catch (error) {
        console.error('Failed to stop recording', error);
        Alert.alert('Error', 'Failed to stop recording');
      }
    } else {
      console.log('No recording in progress...');
    }
  };

  const analyzeAudio = async () => {
    //const diagnosis = await FetchData.uploadVideo(savedPath.current, clicked);
    const prediction = await HTTPService.analyzeAudio(
      audioFrequency,
      savedAudioFile
    );
    setAudioFrequency(0);
    setDiagnosis(1);
    if (prediction.prediction == 1) {
      setModalVisibility(true);
    } else {
      setShowConfetti(true);
      Toast.show({ type: 'success', text1: 'ඔබ ආතතියෙන් තොරයි' });
    }
  };
  const handleRecordButtonClick = () => {
    setAudioFrequency(audioFrequency + 1);
    startRecording();
    if (clicked < 2) {
      setClicked(clicked + 1);
    }
  };

  const getModal = () => {
    if (diagnosis === 1) {
      console.log('User is stressed');
      return (
        <ReactNativeModal
          backdropColor="#000000"
          backdropOpacity={0.9}
          coverScreen={false}
          isVisible={modalVisibility}
          onBackdropPress={() => setModalVisibility(false)}>
          <View style={tw`flex flex-1  content-center my-12`}>
            <View style={tw`flex content-center`}>
              <NatureSvg style={tw` w-10 m-auto my-10`} />
              <MinuteTimer />
              <Text style={tw`text-white text-center text-xl font-bold my-10`}>
                ටයිමරය සමඟ ගණන් කරමින් ගැඹුරින් හුස්ම ගන්න
              </Text>
              <View>
                <Text style={tw`text-white text-center italic text-sm mt-10`}>
                  සමහර විට, මුළු දවසම වැදගත්ම දෙය වන්නේ ගැඹුරු හුස්මක් දෙකක් අතර
                  අප ගන්නා විවේකයයි.
                </Text>
                <Text style={tw`text-white text-center italic text-sm `}>
                  -Etty Hillesum-
                </Text>
              </View>
            </View>
          </View>
        </ReactNativeModal>
      );
    } else if (diagnosis === 0) {
      return (
        <ReactNativeModal
          coverScreen={false}
          isVisible={modalVisibility}
          onBackdropPress={() => setModalVisibility(false)}>
          <View style={tw`w-50 mx-auto`}>
            <View style={tw`flex gap-2 `}>
              <Text fontSize={'lg'} style={tw`text-center text-white`}></Text>
            </View>
          </View>
        </ReactNativeModal>
      );
    } else {
      console.log('No diagnosis found');
    }
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return (
    <ScrollView style={tw`flex flex-col flex-1`}>
      {getModal()}
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          autoStart={true}
          fadeOut={true}
          onAnimationEnd={() => setShowConfetti(false)} // Stop showing confetti after the animation ends
        />
      )}
      <Text style={tw`text-center my-10`} fontSize={'3xl'}>
        ඔබට හැඟෙන ආකාරය කියන්න
      </Text>
      <View style={tw`flex items-center justify-center `}>
        <VoiceAnalyzeSvg style={tw`mb-8 `} />
        <View style={tw`flex gap-4`}>
          <Button
            title={isRecording ? '...' : 'පටිගත කරන්න​'}
            onPress={handleRecordButtonClick}
          />
          <Button title="නවත්වන්න" onPress={stopRecording} />
          <Button title={'විශ්ලේෂණය කරන්න'} onPress={analyzeAudio} />
        </View>
      </View>
      <View style={tw`border-black border-2 rounded-lg mx-6 p-5 my-12`}>
        <Text style={tw`text-sm text-red-500`}>
          මෙම යෙදුම ඔබගේ උපාංගයේ මයික්‍රෆෝනය භාවිතයෙන් ඔබගේ කටහඬ පටිගත කර
          විශ්ලේෂණය කරයි. විශ්ලේෂණයෙන් පසු ශ්රව්ය උපකරණ සකස් කර මකා දමනු ලැබේ.
          අපි ඔබේ පටිගත කිරීම් ගබඩා කිරීම, බෙදාගැනීම හෝ විකිණීම සිදු නොකරමු. මෙම
          විශේෂාංගය භාවිතා කිරීමෙන්, ඔබ මෙම ක්‍රියාවලියට එකඟ වේ.
        </Text>
      </View>
    </ScrollView>
  );
};
