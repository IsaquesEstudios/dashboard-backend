import { getAuth } from "firebase-admin/auth";

type FirebaseCreateNewEmployeeServicesType = {
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  password: string;
  displayName: string;
  photoURL: string;
  disabled: boolean;
};

class FirebaseCreateNewEmployeeServices {
  async handle({
    displayName,
    email,
    disabled = false,
    emailVerified = false,
    password,
    phoneNumber,
    photoURL = "http://www.example.com/12345678/photo.png",
  }: FirebaseCreateNewEmployeeServicesType) {
    const CreateUser = getAuth()
      .createUser({
        email: email,
        emailVerified: emailVerified,
        phoneNumber: phoneNumber,
        password: password,
        displayName: displayName,
        photoURL: photoURL,
        disabled: disabled,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });

    return CreateUser;
  }
}

export { FirebaseCreateNewEmployeeServices };
