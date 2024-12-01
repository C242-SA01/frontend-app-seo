import { Firestore, CollectionReference, QueryDocumentSnapshot } from "@google-cloud/firestore";
import bcrypt from "bcrypt";
import firestore from "./init";

// Helper untuk mendapatkan referensi koleksi
function getCollectionRef(collectionName: string): CollectionReference {
  return firestore.collection(collectionName);
}

// Fungsi untuk mengambil semua data dari koleksi
export async function retrieveData(collectionName: string) {
  try {
    const collectionRef = getCollectionRef(collectionName);
    const snapshot = await collectionRef.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to retrieve data");
  }
}

// Fungsi untuk mengambil data berdasarkan ID
export async function retrieveDataById(collectionName: string, id: string) {
  try {
    const docRef = getCollectionRef(collectionName).doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data by ID:", error);
    throw error;
  }
}

// Fungsi Sign In
export async function signIn(userData: { email: string }): Promise<{ id: string; [key: string]: any } | null> {
  try {
    const collectionRef = getCollectionRef("users");
    const snapshot = await collectionRef.where("email", "==", userData.email).get();

    if (!snapshot.empty) {
      const user = snapshot.docs[0];
      return { id: user.id, ...user.data() };
    }
    return null;
  } catch (error) {
    console.error("Error during sign in:", error);
    throw new Error("Failed to sign in");
  }
}

// Fungsi Sign Up
export async function signUp(userData: { name: string; email: string; password: string; role?: string }, callback: Function) {
  try {
    const collectionRef = getCollectionRef("users");
    const snapshot = await collectionRef.where("email", "==", userData.email).get();

    if (!snapshot.empty) {
      callback({ status: false, message: "Email already exists" });
    } else {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.role = "user";
      await collectionRef.add(userData);
      callback({ status: true, message: "Sign up successful" });
    }
  } catch (error: any) {
    console.error("Error during sign up:", error);
    callback({ status: false, message: error.message });
  }
}

// Fungsi Sign In dengan Google
export async function signInWithGoogle(userData: any, callback: Function) {
  try {
    const collectionRef = getCollectionRef("users");
    const snapshot = await collectionRef.where("email", "==", userData.email).get();

    if (!snapshot.empty) {
      const existingUser = snapshot.docs[0];
      userData.role = existingUser.data().role;
      await existingUser.ref.update(userData);
      callback({ status: true, message: "Signed in with Google successfully", data: userData });
    } else {
      userData.role = "member";
      await collectionRef.add(userData);
      callback({ status: true, message: "Signed in with Google successfully", data: userData });
    }
  } catch (error: any) {
    console.error("Error during Google sign-in:", error);
    callback({ status: false, message: error.message });
  }
}
