import { LoaderFunction, redirect } from 'react-router-dom';
import { getAuthUserID } from '../utils/helpers';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebaseClient';

const loader: LoaderFunction = async () => {
  const currentUserID = await getAuthUserID();
  if (!currentUserID) return redirect('/auth');

  const res = await getDoc(doc(db, 'users', currentUserID));
  const user = res.data();

  return { user };
};

export default loader;
