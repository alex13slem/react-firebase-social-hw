import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import ProfileCard from '../../components/ProfileCard';
import { useRouteLoaderData } from 'react-router-dom';
import type { UserProfile } from '../../types/users';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const UserProfile: FC<Props> = () => {
  const { user } = useRouteLoaderData('root') as { user: UserProfile };

  return (
    <section className={css.root}>
      <ProfileCard user={user} />
    </section>
  );
};

export default UserProfile;
