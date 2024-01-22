import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import type { UserProfile } from '../../types/users';
import UsersDeckItem from '../UsersDeckItem';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  users: UserProfile[];
}

const UsersDeck: FC<Props> = ({ users }) => {
  return (
    <section className={css.root}>
      {users.map((user) => (
        <UsersDeckItem key={user.uid} user={user} />
      ))}
    </section>
  );
};

export default UsersDeck;
