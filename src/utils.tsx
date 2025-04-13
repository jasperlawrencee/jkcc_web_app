import { User } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

const grantAdminRole = async (email: string) => {
  const functions = getFunctions();
  const addAdminRole = httpsCallable(functions, "addAdminRole");

  try {
    const result = await addAdminRole({ email });
    const data = result.data as { message: string }; // Explicitly cast to expected type
    console.log(`${data.message}`); // Success message
  } catch (error) {
    console.error("Error granting admin role:", error);
  }
};

// CLIENT SIDE checker if current user is admin and returns boolean value on client
const checkAdminClient = async (user: User | null) => {

  if (!user) {
    console.error("No user is signed in.");
    return false;
  }

  try {
    const idTokenResult = await user.getIdTokenResult();
    if (idTokenResult.claims.admin) {
      console.log("User has admin privileges.");
      return true;
    } else {
      console.log("User does not have admin privileges.");
      return false;
    }
  } catch (error) {
    console.error("Error checking admin priviledges: ", error);
    return false;
  }
}

// SERVER SIDE checker if user is admin
const checkAdminServer = async (idToken: string) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    if (decodedToken.admin) {
      console.log("User has admin privileges.");
      return true;
    } else {
      console.log("User does not have admin privileges.");
      return false;
    }
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return false;
  }
};

export { grantAdminRole, checkAdminClient, checkAdminServer };

// Example usage
// grantAdminRole("user@example.com");

