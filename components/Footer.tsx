import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from "@react-native-segmented-control/segmented-control";

const SegmentControlTabs = ["List", "Grid"];

export const Footer = (props: {
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
}) => {
  const { selectedIndex, setSelectedIndex } = props;
  const { bottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = useTheme();

  const onChange = (
    event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>
  ) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  return (
    <View style={[styles.container, { paddingBottom: bottom + 20 }]}>
      <LinearGradient
        pointerEvents="none"
        colors={[
          colorScheme === "dark" ? "rgba(0,0,0,0)" : "rgba(255,255,255,0)",
          theme.colors.background,
        ]}
        style={styles.gradient}
      />
      <BlurView
        tint="prominent"
        intensity={100}
        style={[styles.blurWrapper, { paddingHorizontal: 20 }]}
      >
        <Text style={[{ color: theme.colors.text }, styles.buttonText]}>
          Mode:
        </Text>
        <SegmentedControl
          values={SegmentControlTabs}
          selectedIndex={selectedIndex}
          style={styles.segmentControlStyle}
          fontStyle={styles.segmentControlFontStyle}
          onChange={onChange}
        />
      </BlurView>
      <BlurView tint="prominent" intensity={100} style={styles.blurWrapper}>
        <Ionicons
          name="filter-circle-outline"
          size={35}
          color={theme.colors.primary}
        />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    top: -100,
  },
  blurWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 100,
    overflow: "hidden",
    gap: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },
  segmentControlStyle: {
    width: 150,
    height: 35,
  },
  segmentControlFontStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
