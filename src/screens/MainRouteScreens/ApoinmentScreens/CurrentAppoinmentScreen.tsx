import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
// Import the AppointmentCard component
import tw from 'twrnc';
import AppointmentCard from './components/AppoinmentCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Fab } from 'native-base';
import { AddSVG } from '@vs/assets';
import { colors } from '@vs/constants';
import { StackScreenProps } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import { getFormattedDate } from '../../../utils/greetingMessage';

interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  appointmentTime: string;
  queueNumber: number;
  doctorImage?: string;
}
type CurrentAppoinmentListScreenProps = StackScreenProps<
  Record<string, object | undefined>,
  'CurrentAppoinmentListScreen'
>;
export function CurrentAppoinmentListScreen({
  navigation
}: CurrentAppoinmentListScreenProps) {
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      doctorName: 'Dr. Jane Doe',
      specialty: 'Cardiologist',
      appointmentTime: '3:00 PM',
      queueNumber: 4,
      doctorImage: 'https://example.com/doctor-image1.jpg'
    },
    {
      id: 2,
      doctorName: 'Dr. John Smith',
      specialty: 'Dentist',
      appointmentTime: '10:00 AM',
      queueNumber: 2,
      doctorImage: 'https://example.com/doctor-image2.jpg'
    },
    {
      id: 3,
      doctorName: 'Dr. Emily Clark',
      specialty: 'Neurologist',
      appointmentTime: '1:30 PM',
      queueNumber: 7,
      doctorImage: 'https://example.com/doctor-image3.jpg'
    },
    {
      id: 4,
      doctorName: 'Dr. Robert Wilson',
      specialty: 'Dermatologist',
      appointmentTime: '11:15 AM',
      queueNumber: 9,
      doctorImage: 'https://example.com/doctor-image4.jpg'
    },
    {
      id: 5,
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Pediatrician',
      appointmentTime: '9:00 AM',
      queueNumber: 1,
      doctorImage: 'https://example.com/doctor-image5.jpg'
    }
  ]);

  return (
    <ScrollView style={tw`p-4 `}>
      <Text
        style={tw`my-5`}>{`Appoinments you have for ${getFormattedDate()}`}</Text>
      {appointments.map(appointment => (
        <TouchableOpacity key={appointment.id}>
          <AppointmentCard
            doctorName={appointment.doctorName}
            specialty={appointment.specialty}
            appointmentTime={appointment.appointmentTime}
            queueNumber={appointment.queueNumber}
            doctorImage={appointment.doctorImage}
          />
        </TouchableOpacity>
      ))}
      {/* //Add padding to display last card */}
      <View style={tw`mt-18`}></View>
      <View>
        {isFocused && (
          <Fab
            icon={<AddSVG />}
            position="absolute"
            style={tw`mb-20 bg-[${colors.primary[300]}]`}
            onPress={() => {
              navigation.navigate('DoctorListScreen');
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}
