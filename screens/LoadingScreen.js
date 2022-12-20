import React, { useEffect, useContext } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { AppContext } from '../components/appContext';

export default function LoadingScreen({ navigation }) {
  const { siteDetails } = useContext(AppContext);
  const [siteContext] = siteDetails;
  const { auth } = siteContext;

  useEffect(() => {
    if(auth) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('Sign In');
        }
      });
    }
  }, [auth]);

  return (
    <View>
      <ActivityIndicator size="large" />
      <Text style={{color: "black"}}>loading screen...</Text>
    </View>
  );
}