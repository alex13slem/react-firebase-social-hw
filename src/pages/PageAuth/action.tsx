import { auth, db, googleProvider } from '../../fb-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ActionFunction, redirect } from 'react-router-dom';

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
      const newUser = {
        name: user.displayName || 'Новый пользователь',
        age: 0,
        avatarUrl: user.photoURL || '',
        email: user.email,
        friendsList: [],
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
