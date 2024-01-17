import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import UsersDeck from '../../components/UsersDeck';
import { useLoaderData } from 'react-router-dom';
import { User } from '../../types/users';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const UserFriends: FC<Props> = () => {
  const { users } = useLoaderData() as { users: User[] };

  return (
    <div className={css.root}>
      <UsersDeck users={users} />
    </div>
  );
};

export default UserFriends;
