import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="screens/chats" options={{ headerShown: false }} />
      <Stack.Screen name="screens/chat/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="screens/course/[id]"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="screens/quiz/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="screens/registration/index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/fees/index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/timetable/index" options={{ headerShown: false }} />
    </Stack>
  );
}
