import { useEffect, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { AppContext } from "../components/appContext";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

export default function Home({ navigation }) {
  const { guest, newUser, siteDetails } = useContext(AppContext);
  const [siteContext] = siteDetails;
  const { db, auth } = siteContext;

  const [newUserContext] = newUser;
  const uid = auth.currentUser.uid;

  const [guestContext, setGuestContext] = guest;

  useEffect(() => {
    async function initializeUser() {
      try {
        const docRef = doc(siteContext.db, "users", auth.currentUser.uid);
        console.log("docRef: ", docRef);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists) {
          const dataObj = docSnap.data();
          setGuestContext({ ...dataObj, id: auth.currentUser.uid });
        } else {
          Alert.alert("the doc doesn't exist. this should never happen");
        }
      } catch (err) {
        Alert.alert("There is an error.", err.message);
      }
    }
    initializeUser();
  }, [newUserContext]);

  useEffect(() => {
    console.log("Home loading the first time.");
    if (newUserContext.newUser) {
      navigation.replace("Select Interests");
    } else {
      // do nothing
    }
  }, []);
  console.log("guest context: ", guestContext);
  return (
    <View>
      <Text>Home</Text>
      <Text>username: {guestContext.username}</Text>
      <Text>description: {guestContext.description}</Text>
    </View>
  );
}
