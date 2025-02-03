import { PropsWithChildren, ReactEventHandler, ReactElement } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, GestureResponderEvent } from 'react-native';

type DefaultProps = PropsWithChildren<{
    title: String;
}>;

type Props = PropsWithChildren<{
    title: String;
    onPress: () => void;
}>;

export function MyScheduleCard({
    title
}:DefaultProps) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 20,
          height: 130,
          borderRadius: 15,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
      </TouchableOpacity>
    );
  };

export function MyDashCard({
    title, onPress
}:Props) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 20,
          height: 350,
          borderRadius: 15,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}
        onPress={onPress}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
      </TouchableOpacity>
    );
  };