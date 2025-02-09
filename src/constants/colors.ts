export const colors = {
  textPrimary: "#1F1F1F",
  textSecondary: "#3E3D3F",
  unselectedPrimary: "#8E8E8E",
  unselectedSecondary: "#E9E9E9",
  cardBackground: "#F8F8F8",
  cardBackgroundSecondary: "#FFFFFF",
  backgroundMain: "#FFFFFF",
  backgroundSecondary: "#F8F8F8",
  white: "#FFFFFF",
  black: "#000000",
  lightBox: "rgba(0, 0, 0, 0.2)",
} as const;

export type Colors = typeof colors;
