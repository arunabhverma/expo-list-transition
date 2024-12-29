import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { Video, VideosList } from "@/constants/Data";
import { Footer } from "@/components/Footer";
import { List } from "@/components/List";
import { gap, paddingHorizontal } from "@/constants/const";

const Main = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const isGrid = selectedIndex !== 0;

  const renderItem = useCallback(
    (item: Video) => <List key={item.id} item={item} isGrid={isGrid} />,
    [isGrid]
  );

  return (
    <View>
      <Animated.ScrollView
        layout={LinearTransition}
        contentInsetAdjustmentBehavior={"automatic"}
        contentContainerStyle={{ paddingTop: 15, paddingHorizontal }}
      >
        <Animated.View
          layout={LinearTransition}
          style={[styles.listContainer, isGrid && styles.gridContainer]}
        >
          {VideosList.map(renderItem)}
        </Animated.View>
      </Animated.ScrollView>
      <Footer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  listContainer: {
    flexWrap: "nowrap",
    flexDirection: "column",
    gap: gap - 10,
  },
  gridContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: gap,
  },
});
