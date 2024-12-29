import { Dimensions } from "react-native";

export const width = Dimensions.get("window").width;
export const paddingHorizontal = 10;
export const gap = 20;
export const columns = 2;
export const bothSideSpace = 2 * paddingHorizontal;
export const totalGap = gap * (columns - 1);
export const itemWidth = (width - bothSideSpace - totalGap) / columns;