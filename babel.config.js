module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "nativewind/babel"],
    plugins: [
      "expo-router/babel",
      "react-native-reanimated/plugin",
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
          importSource: "nativewind",
        },
      ],
    ],
  };
};
