import { User, onAuthStateChanged } from 'firebase/auth';
import { create } from 'zustand';
import { auth } from '../fb-config';

interface UserAuthState {
  currentUser: null | User;
  setCurrentUser: (currentUser: null | User) => void;
}

export const useUserAuth = create<UserAuthState>()((set) => ({
  currentUser: null,
  setCurrentUser(currentUser) {
    set(() => ({ currentUser }));
  },
}));

onAuthStateChanged(auth, (user) => {
  if (user) {
    useUserAuth.setState({ currentUser: user });
  } else {
    useUserAuth.setState({ currentUser: null });
  }
});
