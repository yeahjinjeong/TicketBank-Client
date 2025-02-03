import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ScrollView from '@/components/ScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabThreeScreen() {
  return (
    <ScrollView
      backgroundColor = 'green' title='Ranking'
      >
      <Collapsible title="Login">
        <ThemedText>
        <ThemedText type="defaultSemiBold">ID:</ThemedText>
        <ThemedText type="defaultSemiBold">PASSWORD:</ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Profile Image">
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Today's Best Musical">
        <ThemedText>
          Wicked
        </ThemedText>
      </Collapsible>
      <Collapsible title="Today's Best Actor/Actress">
        <ThemedText>
          Wicked
        </ThemedText>
      </Collapsible>
      <Collapsible title="Today's Event">
        <ThemedText>
          Wicked
        </ThemedText>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>How Simple!
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
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
