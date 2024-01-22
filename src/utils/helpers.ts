import { getAuth } from 'firebase/auth';

export const cn = (...cNames: unknown[]): string =>
  cNames.filter(Boolean).join(' ');

export async function getAuthUserID(): Promise<string | null> {
  return await new Promise((resolve, reject) => {
    try {
      getAuth().onIdTokenChanged((user) => {
        if (!user) {
          resolve(null);
        } else {
          resolve(user.uid);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
