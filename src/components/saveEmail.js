import {db} from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";


export const saveEmailToFirebase = async (email) => {
  try {
    await addDoc(collection(db, "subscribers"), {
      email: email,
      createdAt: Timestamp.now(),
    });
    console.log("Email saved successfully:", email);
  } catch (error) {
    console.error("Error saving email:", error);
  }
};