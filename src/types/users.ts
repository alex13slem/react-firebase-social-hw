export type UserProfile = {
  uid: string;
  name: string;
  email: string | null;
  age: number | null;
  avatarUrl: string | null;
  friendsList: string[];
};
