import type { User } from 'firebase/auth';
import { create } from 'zustand';

type CurrentUser = User | null;

interface UserAuthState {
  currentUser: CurrentUser;
  setCurrentUser: (currentUser: CurrentUser) => void;
}

export const useUserAuth = create<UserAuthState>()((set) => ({
  currentUser: null,
  setCurrentUser(currentUser) {
    set(() => ({ currentUser }));
  },
}));
