import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export const Title = (props: TextProps) => {
  const theme = useTheme();
  return (
    <Text
      {...props}
      style={[{ color: theme.colors.text }, styles.defaultStyle, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
