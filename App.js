import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import { AppContext } from "./components/appContext";
import { useFonts } from "expo-font";
import envVars from "./helpers/envVars";

import SignIn from "./screens/SignIn";
import LoadingScreen from "./screens/LoadingScreen";
import Home from "./screens/Home";

import AppLoading from "expo-app-loading";
import customFonts from "./helpers/customFonts";

const Stack = createStackNavigator();

export default function App() {
  const [guestContext, setGuestContext] = useState({});
  const [newUserContext, setNewUserContext] = useState({});
  const [siteContext, setSiteContext] = useState({});

  useEffect(() => {
    const firebaseConfig = {
      apiKey: envVars.API_KEY,
      authDomain: envVars.AUTH_DOMAIN,
      projectId: envVars.PROJECT_ID,
      storageBucket: envVars.STORAGE_BUCKET,
      messagingSenderId: envVars.MESSAGING_SENDER_ID,
      appId: envVars.APP_ID,
      measurementId: envVars.MEASUREMENT_ID,
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    setSiteContext({
      db: db,
      auth: auth,
    });
  }, []);

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <AppContext.Provider
          value={{
            guest: [guestContext, setGuestContext],
            newUser: [newUserContext, setNewUserContext],
            siteDetails: [siteContext, setSiteContext],
          }}
        >
          <Stack.Navigator>
            <Stack.Screen name={"Loading"} component={LoadingScreen} />
            <Stack.Screen name="Sign In" component={SignIn} />
            <Stack.Screen name={"Home"} component={Home} />
          </Stack.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    );
  }
}
