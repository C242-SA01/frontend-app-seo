import bcrypt from "bcrypt";
import { collection, getFirestore, getDocs, getDoc, doc, where, query, addDoc } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);
export async function retrieveData(collectionName: string) {
  const db = getFirestore();

  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}
export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(userData: { email: string }) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(userData: { name: string; email: string; password: string; role?: string }, callback: Function) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  if (data.length > 0) {
    callback({ status: false, message: "Email already exists" });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "user";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({ status: "success", message: "Sign up success" });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  }
}
