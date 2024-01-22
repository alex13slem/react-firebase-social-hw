import { auth, db, googleProvider } from '../../lib/firebaseClient';
import { signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ActionFunction, redirect } from 'react-router-dom';
import { UserProfile } from '../../types/users';

export const actionLogout: ActionFunction = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
  return redirect('/auth');
};

const action: ActionFunction = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log('добавление пользователя');
      const newUser: UserProfile = {
        name: user.displayName || 'Новый пользователь',
        age: null,
        avatarUrl: user.photoURL,
        email: user.email,
        friendsList: [],
        uid: user.uid,
      };

      await setDoc(docRef, newUser);
    }

    return redirect('/');
  } catch (error) {
    console.error(error);
  }
  return null;
};

export default action;
