import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "NotJust Dev" }} />
    </Stack>
  );
};

export default RootLayout;
