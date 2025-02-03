import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ScrollView from '@/components/ScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MyCalendar } from '@/components/MyCalendar';

export default function TabTwoScreen() {
  return (
    <ScrollView backgroundColor='pink' title='My Ticket Collections'>
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      {/* <MyCalendar></MyCalendar> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
