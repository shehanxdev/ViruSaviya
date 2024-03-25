// import { Text, View } from 'native-base';
// import React, { useEffect, useRef, useState } from 'react';
// import { Alert, PermissionsAndroid, Platform } from 'react-native';
// import AudioRecorderPlayer, {
//   AudioEncoderAndroidType,
//   AudioSet,
//   AudioSourceAndroidType,
//   OutputFormatAndroidType
// } from 'react-native-audio-recorder-player';
// import RNFS from 'react-native-fs';

// import { Button } from '@vs/components';
// //import { MicrophoneSVG } from '@vs/assets';
// import tw from 'twrnc';
// import { colors } from '@vs/constants';
// //import { FetchData } from './../../../services/fetchData';
// import ReactNativeModal from 'react-native-modal';

// export const VoiceAnalysisScreen = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const savedPath = useRef('');
//   const [clicked, setClicked] = useState(0);
//   const [diagnosis, setDiagnosis] = useState('');
//   const [modalVisibility, setModalVisibility] = useState(false);

//   const audioSet: AudioSet = {
//     AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
//     AudioSourceAndroid: AudioSourceAndroidType.MIC,
//     OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS
//   };
//   const checkPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const grants = await PermissionsAndroid.requestMultiple([
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//           PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
//         ]);

//         console.log('write external stroage', grants);

//         if (
//           grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           grants['android.permission.READ_EXTERNAL_STORAGE'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           grants['android.permission.RECORD_AUDIO'] ===
//             PermissionsAndroid.RESULTS.GRANTED
//         ) {
//           console.log('Permissions granted');
//         } else {
//           console.log('All required permissions not granted');
//           return;
//         }
//       } catch (err) {
//         console.warn(err);
//         return;
//       }
//     }
//   };

//   const startRecording = async () => {
//     if (!isRecording) {
//       try {
//         const path = `${RNFS.DocumentDirectoryPath}/record.mp3`;
//         const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
//         savedPath.current = uri;
//         setIsRecording(true);
//         console.log('Recording started and saved at ' + uri);
//       } catch (error) {
//         console.error('Failed to start recording', error);
//         Alert.alert('Error', 'Failed to start recording');
//       }
//     } else {
//       console.log('Already recording');
//     }
//   };

//   const stopRecording = async () => {
//     if (isRecording) {
//       try {
//         const result = await audioRecorderPlayer.stopRecorder();
//         setIsRecording(false);
//         console.log('Recording stopped');

//         // Fetch audio file from emulator storage
//         const audioFile = await RNFS.readFile(savedPath.current, 'base64');

//         // Save audio file in project directory
//         const projectDir = RNFS.DocumentDirectoryPath;
//         const filePath = `${projectDir}/sound.mp3`;
//         await RNFS.writeFile(filePath, audioFile, 'base64');

//         console.log('Audio file saved in project directory:', filePath);
//       } catch (error) {
//         console.error('Failed to stop recording', error);
//         Alert.alert('Error', 'Failed to stop recording');
//       }
//     } else {
//       console.log('No recording in progress...');
//     }
//   };

//   const startPlaying = async () => {
//     if (!isPlaying) {
//       try {
//         setIsPlaying(true);
//         await audioRecorderPlayer.startPlayer(savedPath.current);
//         console.log('Audio playback started');
//       } catch (error) {
//         console.error('Failed to start audio playback', error);
//         Alert.alert('Error', 'Failed to start audio playback');
//       }
//     } else {
//       console.log('Already playing');
//     }
//   };

//   const pausePlaying = async () => {
//     if (isPlaying) {
//       try {
//         setIsPlaying(false);
//         await audioRecorderPlayer.pausePlayer();
//         console.log('Audio playback paused');
//       } catch (error) {
//         console.error('Failed to pause audio playback', error);
//         Alert.alert('Error', 'Failed to pause audio playback');
//       }
//     } else {
//       console.log('No audio playing');
//     }
//   };

//   const analyzeAudio = async () => {
//     const diagnosis = await FetchData.uploadVideo(savedPath.current, clicked);
//     setDiagnosis(diagnosis);
//     setModalVisibility(true);
//   };
//   const handleRecordButtonClick = () => {
//     startRecording();
//     if (clicked < 2) {
//       setClicked(clicked + 1);
//     }
//   };

//   const getModal = (diagnosis: string) => {
//     return (
//       <ReactNativeModal
//         coverScreen={false}
//         isVisible={modalVisibility}
//         onBackdropPress={() => setModalVisibility(false)}>
//         <View style={tw`w-50 mx-auto`}>
//           <View style={tw`flex gap-2 `}>
//             <Text fontSize={'lg'} style={tw`text-center text-white`}>
//               {diagnosis}
//             </Text>
//           </View>
//         </View>
//       </ReactNativeModal>
//     );
//   };

//   useEffect(() => {
//     checkPermission();
//   }, []);

//   return (
//     <View style={tw`flex flex-col flex-1`}>
//       {getModal(diagnosis)}
//       <Text style={tw`text-center mt-5`} fontSize={'3xl'}>
//         How do you feel today?
//       </Text>
//       <View style={tw`flex items-center justify-center flex-1`}>
//         <MicrophoneSVG style={tw`mb-8`} />
//         <View style={tw`flex gap-4`}>
//           <Button
//             title={isRecording ? 'Recording...' : 'Start Recording'}
//             onPress={handleRecordButtonClick}
//           />
//           <Button title="Stop Recording" onPress={stopRecording} />
//           <Button
//             bgcolor={colors.gold}
//             title={'Analyze Audio'}
//             onPress={analyzeAudio}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };
