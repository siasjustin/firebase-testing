import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { signIn } from "../API/firebaseMethods";
import { AppContext } from "../components/appContext";
import validateEmail from "../helpers/validateEmail";

import styles from "../styled/global";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function SignIn({ route, navigation }) {
  const { siteDetails } = useContext(AppContext);
  const [siteContext] = siteDetails;
  const { auth } = siteContext;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [inputType, setInputType] = useState("");
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const [firstTime, setFirstTime] = useState(true);

  const handlePress = () => {
    if (readyToSubmit) {
      if (!email) {
        setEmailError("Email field is required.");
      } else if (!validateEmail(email)) {
        setEmailError("You must enter a valid email.");
      } else if (!password) {
        setPasswordError("Password is required");
        setPassword("");
      } else {
        console.log("auth in handle press: ", auth);
        signIn(email, password, auth)
          .then((msg) => {
            switch (msg) {
              case "success":
                console.log("Success");
                break;
              case "auth/user-not-found":
                console.log("user not found");
                setEmailError("User Not found");
                break;
              case "auth/wrong-password":
                console.log("wrong password");
                setPasswordError("Wrong Password");
                break;
              default:
                console.log("MSG:", msg);
              // setPasswordError(msg);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      setPasswordError("Please fill out the form");
    }
  };

  const signUpAction = () => {
    navigation.replace("Sign Up");
  };

  const signInAction = () => {
    setFirstTime(!firstTime);
    navigation.navigate("Sign In");
  };

  function handleChange(val, inputToHandle) {
    setPasswordError("");
    if (inputToHandle === "email") {
      setEmail(val);

      if (validateEmail(val)) {
        setEmailError("");
      }
    } else if (inputToHandle === "password") {
      setPassword(val);
    }
    setCurrentInput(val);
  }

  useEffect(() => {
    if (validateEmail(email) && password && password.length > 5) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [email, password]);

  function setTheCurrentInput(value, inputType) {
    setCurrentInput(value);
    setInputType(inputType);
  }

  const emptyState = () => {
    setCurrentInput("");
    setReadyToSubmit();
    setInputType("");
    setPassword("");
    setPasswordError("");
    setReadyToSubmit(false);
    setEmailError("");
    setEmail("");
  };

  useEffect(() => {
    return emptyState();
  }, []);

  return (
    <>
      <View style={[styles.container, { backgroundColor: "transparent" }]}>
        <View style={styles.signInContainer}>
          <>
            <KeyboardAvoidingView
              keyboardVerticalOffset={0}
              behavior={"position"}
            >
              <TextInput
                style={styles.formInput}
                placeholder="Enter your email"
                value={email}
                onChangeText={(email) => handleChange(email, "email")}
                autoCapitalize="none"
                onFocus={() => setTheCurrentInput(email, "text")}
                onBlur={() => setTheCurrentInput(null, null)}
              />
              <Text style={styles.formError}>{emailError}</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Enter your password"
                value={password}
                onChangeText={(password) => handleChange(password, "password")}
                secureTextEntry={true}
                onFocus={() => setTheCurrentInput(password, "password")}
                onBlur={() => setTheCurrentInput("", "")}
              />
              <View style={{ padding: 12 }}>
                <Text style={styles.formError}>{passwordError}</Text>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              onPress={() => handlePress()}
              style={readyToSubmit ? styles.button : styles.buttonInactive}
            >
              <Text
                style={[
                  styles.buttonText,
                  readyToSubmit ? styles.readyToSubmit : {},
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("Forgot Password")}
            >
              Forgot Password?
            </Text>
          </>
        </View>
      </View>
    </>
  );
}
