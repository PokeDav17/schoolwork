// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcv2GD5xhGD2E3yUcDSZk58OjRj0FekSo",
  authDomain: "schoolwork-99aba.firebaseapp.com",
  projectId: "schoolwork-99aba",
  storageBucket: "schoolwork-99aba.appspot.com",
  messagingSenderId: "467119747909",
  appId: "1:467119747909:web:20ca4cccb83b91b38f442c",
  measurementId: "G-LMSJ308BW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = firebase.storage();


const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    
    fileRef.put(file).then(() => {
        console.log('File uploaded successfully');
        // Add code to handle success (e.g., display success message)
    }).catch((error) => {
        console.error('Error uploading file:', error);
        // Add code to handle error (e.g., display error message)
    });
});

