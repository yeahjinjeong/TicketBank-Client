import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Button, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from './ThemedText';

const HEADER_HEIGHT = 150;

type Props = PropsWithChildren<{
    title : string,
    backgroundColor : string;
}>;

export default function ParallaxScrollView({
    title,
  children,
  backgroundColor
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
        <ThemedView style={[styles.header, {backgroundColor} as ViewStyle]}>
                <ThemedText type='title'>{title}</ThemedText>
        </ThemedView>
        <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            scrollIndicatorInsets={{ bottom }}
            contentContainerStyle={{ paddingBottom: bottom }}>
            <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor : 'white',
    justifyContent: 'flex-end',
    padding : 20,
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
