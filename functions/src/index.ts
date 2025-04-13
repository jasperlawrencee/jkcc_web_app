/*
    WELCOME TO CALLBACK HELL
    run on console: firebase deploy --only functions
*/

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminRole = functions.https.onCall(async (data: any, context: any) => {

  // Ensure the request is made by an authenticated admin
  if (!context.auth || !context.auth.token.admin) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "Only admins can grant admin privileges."
    );
  }

  // Grant admin role to the user
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user: any) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been granted admin privileges.`,
      };
    })
    .catch((err: Error) => {
      console.error(err);
      throw new functions.https.HttpsError("unknown", err.message);
    });
});

exports.setAdminClaims = functions.https.onCall(async (data: any, context: any) => {

  // If necessary check the uid of the caller, via the context object

  const adminUIDs = ['MdUfpevezgeY0pmxbDoZL2XOAqS2'];

  await Promise.all(adminUIDs.map(uid => admin.auth().setCustomUserClaims(uid, { admin: true })));
  

  return { result: "Operation completed" }
  
});