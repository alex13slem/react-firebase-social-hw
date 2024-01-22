import { collection, getDocs } from 'firebase/firestore';
import { LoaderFunction } from 'react-router-dom';
import { db } from '../../lib/firebaseClient';
import type { UserProfile } from '../../types/users';

const loader: LoaderFunction = async () => {
  try {
    const data = await getDocs(collection(db, 'users'));
    const users: UserProfile[] = data.docs.map((doc) => {
      const user = doc.data() as UserProfile;
      return {
        ...doc.data(),
        age: user.age ? +user.age : null,
        uid: doc.id,
      };
    }) as UserProfile[];

    return { users };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default loader;
