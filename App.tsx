import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { connectToDevTools } from "react-devtools-core";

export default function App() {
  if (__DEV__) {
    connectToDevTools({
      host: "localhost",
      port: 8097,
    });
  }
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar backgroundColor="#f00" />
      </SafeAreaProvider>
    );
  }
}
