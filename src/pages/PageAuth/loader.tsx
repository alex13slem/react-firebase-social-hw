import { LoaderFunction, redirect } from 'react-router-dom';
import { getAuthUserID } from '../../utils/helpers';

const loader: LoaderFunction = async () => {
  const currentUserID = await getAuthUserID();
  if (currentUserID) return redirect('/');

  return null;
};

export default loader;
