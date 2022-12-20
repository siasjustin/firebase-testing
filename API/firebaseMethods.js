import "firebase/firestore";
import { Alert } from "react-native";
import firebase from "firebase/app";

export async function addPost(postObj, db) {
  console.log("PostObj add post: ", postObj);
  try {
    await db.collection("posts").add(postObj);
  } catch (err) {
    console.error(err);
  }
}

export async function editPost(postObj, db) {
  try {
    await db
      .collection("posts")
      .doc(postObj.id)
      .update({ ...postObj });
  } catch (err) {
    console.error("There is something wrong!!!", err.message);
  }
}

export async function addProfilePicToDB(resultUrl, auth, db) {
  const { uid } = auth.currentUser;
  try {
    let doc = await db.collection("users").doc(uid).get();

    if (!doc.exists) {
      ("no doc");
    } else {
      // This is here to verify that the document we grabbed is the correct one.
      // let dataObj = doc.data();
      // console.log("DOC: ", dataObj);

      // here we verify that we do indeed have a resultUrl to add to the database
      // console.log("RESULT URL REMOTE URL: ", resultUrl.remoteURL);

      return db
        .collection("users")
        .doc(uid)
        .update({
          profilePic: resultUrl.remoteURL,
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  } catch (err) {
    Alert.alert("There is an error.", err.message);
  }
}

export async function deleteUserAccount(auth) {
  auth.currentUser
    .delete()
    .then(() => {
      alert("Your account has been deleted");
    })
    .catch((err) => {
      return err.message;
    });
}

export async function forgotPassword(email, auth) {
  return await auth
    .sendPasswordResetEmail(email)
    .then(() => {
      return "success";
    })
    .catch((error) => {
      return error.message;
      // ..
    });
}

export async function getUsers(db) {
  let arr = [];
  let i = 0;
  try {
    let data = await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          arr.push({ ...doc.data(), id: doc.id });
        });
      });
    return arr;
  } catch (err) {
    console.log("GET USERS ERR", err);
    return err;
  }
}

export async function getInterests() {
  let arr = [];
  let i = 0;
  try {
    let data = await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          arr.push({ ...doc.data(), id: doc.id });
        });
      });
    return arr;
  } catch (err) {
    console.log("GET USERS ERR", err);
    return err;
  }
}

export async function reauthenticate(currentPassword, auth) {
  try {
    let user = auth.currentUser;
    let cred = await firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  } catch (err) {
    return err;
  }
}

export async function signIn(email, password, auth) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    let success = "success";
    return success;
  } catch (err) {
    console.log("ERR: ", err.code);
    let message = err.code;
    return message;
  }
}

export async function signOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("This is wrong!", err.message);
  }
}

export async function signUp(
  email,
  password,
  lastName,
  firstName,
  username,
  optInSelected,
  auth,
  db
) {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    const { uid } = auth.currentUser;

    db.collection("users").doc(uid).set({
      firstName,
      lastName,
      username,
      optInSelected,
      favorites: [],
    });
    return res;
  } catch (err) {
    return err;
  }
}

export const uploadImage = async (picPath, image, format) => {
  console.log("IMAGE in uploadImage: ", image);
  // Implement a new Blob promise with XMLHTTPRequest

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", image, true);
    xhr.send(null);
  });

  // Create a ref in Firebase (I'm using my user's ID)
  const ref = firebase.storage().ref().child(picPath);

  // Upload blob to Firebase
  const snapshot = await ref.put(blob, { contentType: format });

  // Create a download URL
  const remoteURL = await snapshot.ref.getDownloadURL();
  const metadata = await snapshot.ref.getMetadata();
  // Return the URL
  return { remoteURL, metadata };
};

export async function updateDescription(db, userId, description) {
  console.log("Updating descriptions with ", description);
  try {
    await db.collection("users").doc(userId).update({
      description,
    });
  } catch (err) {
    console.error("There is something wrong!!!", err.message);
  }
}

export async function updateAccountSettings(
  db,
  userId,
  firstName,
  lastName,
  username,
  setResponseMessage
) {
  console.log("updating username with : ", username);
  console.log("updating firstName with : ", firstName);
  console.log("updating lastName with : ", lastName);

  try {
    await db
      .collection("users")
      .doc(userId)
      .update({
        firstName,
        lastName,
        username,
      })
      .then(() => {
        setResponseMessage({
          message: "Profile has been updated",
          msgType: "success",
        });
      });
  } catch (err) {
    console.error("There is something wrong!!!", err.message);
    setResponseMessage({ message: "Something went wrong", msgType: "fail" });
  }
}

export async function updatePreferences(
  lastName,
  firstName,
  username,
  db,
  auth,
  description
) {
  try {
    const currentUser = auth.currentUser;
    await db.collection("users").doc(currentUser.uid).update({
      lastName,
      firstName,
      username,
      description,
    });
    alert("Your preferences have been updated");
  } catch (err) {
    console.error("There is something wrong!!!", err.message);
  }
}

export async function updateUserPosts(db, userId, user, username) {
  if (user.username !== username) {
    try {
      const querysnapshot = await db
        .collection("posts")
        .where("userRef", "==", userId)
        .get();

      const promises = [];
      querysnapshot.forEach((doc) => {
        promises.push(
          doc.ref.update({
            username: username,
          })
        );
      });
      await Promise.all(promises);
    } catch (err) {
      console.error("There is something wrong!!!", err.message);
    }
  } else {
    console.log("Username did not change");
  }
}

import { signInWithEmailAndPassword } from "firebase/auth";

export async function signIn(email, password, auth) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    let success = "success";
    return success;
  } catch (err) {
    console.log("ERR: ", err);
    let message = err.code;
    return message;
  }
}
