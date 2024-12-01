import { Firestore } from "@google-cloud/firestore";

// Path ke file service account key JSON
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Inisialisasi Firestore
const firestore = new Firestore({
  projectId: process.env.GCP_PROJECT_ID,
  keyFilename: serviceAccountPath,
});

export default firestore;
