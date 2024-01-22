import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import UsersDeck from '../../components/UsersDeck';
import { useLoaderData } from 'react-router-dom';
import type { UserProfile } from '../../types/users';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const UserFriends: FC<Props> = () => {
  const { users } = useLoaderData() as { users: UserProfile[] };

  return (
    <div className={css.root}>
      <UsersDeck users={users} />
    </div>
  );
};

export default UserFriends;
