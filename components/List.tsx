import React from "react";
import { Image, StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { Video } from "@/constants/Data";
import { useTheme } from "@react-navigation/native";
import { gap, itemWidth } from "@/constants/const";
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";

const AnimatedImage = Animated.createAnimatedComponent(Image);

export const List = (props: { item: Video; isGrid: boolean }) => {
  const theme = useTheme();
  const { item, isGrid } = props;

  return (
    <Animated.View
      layout={LinearTransition}
      style={[styles.container, isGrid && styles.gridContainer]}
    >
      <Animated.View layout={LinearTransition} style={{ borderRadius: 10 }}>
        <AnimatedImage
          layout={LinearTransition}
          source={{ uri: item.image }}
          style={[
            styles.imageStyle,
            { backgroundColor: theme.colors.border },
            isGrid && { width: "100%" },
          ]}
        />
      </Animated.View>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        layout={LinearTransition}
        style={styles.textContainer}
      >
        <Title numberOfLines={2}>{item.title}</Title>
        <SubTitle numberOfLines={1}>{item.channelName}</SubTitle>
        <SubTitle numberOfLines={1}>
          {item.views} Views • {item.uploaded}
        </SubTitle>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: gap - 10,
    flexDirection: "row",
  },
  gridContainer: {
    width: itemWidth,
    flexDirection: "column",
  },
  imageStyle: {
    width: 150,
    aspectRatio: "15/11",
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    gap: 3,
  },
});
