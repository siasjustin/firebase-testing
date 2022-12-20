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
