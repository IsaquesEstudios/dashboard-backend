import * as admin from "firebase-admin";

const serviceAccount = require("./auth-fire.json");

// Intialize the firebase-admin project/account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// Initialize Firebase

