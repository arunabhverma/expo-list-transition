import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PlatformColor, useColorScheme } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Latest",
            //large header style
            headerTransparent: true,
            headerLargeTitle: true,
            headerBlurEffect: "prominent",
            headerShadowVisible: true,
            headerLargeTitleShadowVisible: false,
            headerStyle: {
              backgroundColor:
                colorScheme === "dark"
                  ? "rgba(0,0,0,0.1)"
                  : "rgba(255,255,255,0.1)",
            },
            headerLargeStyle: {
              backgroundColor: PlatformColor(
                "systemGroupedBackgroundColor"
              ) as unknown as string,
            },
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
