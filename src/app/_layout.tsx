import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded || fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "NotJust Dev" }} />
    </Stack>
  );
};

export default RootLayout;
