import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyBTfOUqapNkWVzjavFaRaGJMUmLAPw5e54',
  authDomain: 'scholarships-australia.firebaseapp.com',
  projectId: 'scholarships-australia',
  storageBucket: 'scholarships-australia.appspot.com',
  messagingSenderId: '735810204956',
  appId: '1:735810204956:web:2de2ac21d73280a567b6d9',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
