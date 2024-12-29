import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export const SubTitle = (props: TextProps) => {
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
    fontSize: 14,
    opacity: 0.7,
  },
});
