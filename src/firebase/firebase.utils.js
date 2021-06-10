// 只載入需要的，節省 bundle 空間
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 從 firebase 取得的 public key
// 這裏 commit 沒關係，是安全的
const config = {
  apiKey: 'AIzaSyApTYl6xU8auKXSterR-PDEr3oryliZjjE',
  authDomain: 'ciwn-db.firebaseapp.com',
  projectId: 'ciwn-db',
  storageBucket: 'ciwn-db.appspot.com',
  messagingSenderId: '78264891797',
  appId: '1:78264891797:web:0db778ebf59093edad5e9c',
  measurementId: 'G-8VG7Q1GL7H',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google 授權使用打開 modal 讓使用者選擇帳戶
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
