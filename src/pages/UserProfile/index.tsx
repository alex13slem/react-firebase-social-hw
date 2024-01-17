import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import ProfileCard from '../../components/ProfileCard';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const UserProfile: FC<Props> = () => {
  return (
    <section className={css.root}>
      <ProfileCard
        user={{
          age: 18,
          avatarUrl: '',
          email: '',
          friendsList: [],
          name: 'Сделай загрузку',
          uid: '',
        }}
      />
    </section>
  );
};

export default UserProfile;
