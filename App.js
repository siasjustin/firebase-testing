import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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

    const [isLoaded] = useFonts(customFonts);

    if (!firebase.apps.length) {
        console.log("Connected with Firebase");
        // console.log("env: ", envVars)

        let firebaseConfig = {
            apiKey: envVars.API_KEY,
            authDomain: envVars.AUTH_DOMAIN,
            projectId: envVars.PROJECT_ID,
            storageBucket: envVars.STORAGE_BUCKET,
            messagingSenderId: envVars.MESSAGING_SENDER_ID,
            appId: envVars.APP_ID,
            measurementId: envVars.MEASUREMENT_ID,
        };

        firebase.initializeApp(firebaseConfig);

        const firebaseDB = firebase.firestore();
        const authentication = firebase.auth();

        setSiteContext({
            db: firebaseDB,
            auth: authentication,
        });
    }

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
                        <Stack.Screen
                            name={"Loading"}
                            component={LoadingScreen}
                        />
                        <Stack.Screen name="Sign In" component={SignIn} />
                        <Stack.Screen name={"Home"} component={Home} />
                    </Stack.Navigator>
                </AppContext.Provider>
            </NavigationContainer>
        );
    }
}
