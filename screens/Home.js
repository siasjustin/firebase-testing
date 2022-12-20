import { useEffect, useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { AppContext } from "../components/appContext";

export default function Home({ navigation }) {
    const { guest, newUser, siteDetails } = useContext(AppContext);
    const [siteContext] = siteDetails;
    const { db, auth } = siteContext;

    const [newUserContext] = newUser;
    const uid = auth.currentUser.uid;

    const [guestContext, setGuestContext] = guest;

    useEffect(() => {
        async function initializeContext() {
            try {
                let doc = await siteContext.db
                    .collection("users")
                    .doc(uid)
                    .get();

                if (!doc.exists) {
                    console.log("No user data found!");
                } else {
                    let dataObj = doc.data();

                    // set guestContext for the first time.
                    setGuestContext({ ...dataObj, id: auth.currentUser.uid }); // . to be removed //
                }
            } catch (err) {
                Alert.alert("There is an error.", err.message);
            }
        }
        initializeContext();
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
