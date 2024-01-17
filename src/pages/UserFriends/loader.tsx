import { collection, getDocs } from 'firebase/firestore';
import { LoaderFunction, redirect } from 'react-router-dom';
import { db } from '../../fb-config';
import { User } from '../../types/users';

const loader: LoaderFunction = async () => {
  try {
    const data = await getDocs(collection(db, 'users'));
    const users: User[] = data.docs.map((doc) => {
      const user = doc.data() as User;
      return {
        ...doc.data(),
        age: +user.age,
        uid: doc.id,
      };
    }) as User[];

    return { users };
  } catch (error) {
    console.error(error);
    return redirect('/auth');
  }
};

export default loader;
