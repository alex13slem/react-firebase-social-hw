import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import { UserProfile } from '../../types/users';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  user: UserProfile;
}

const ProfileCard: FC<Props> = ({ user }) => {
  const { age, avatarUrl, email, name } = user;
  return (
    <article className={css['profile-card']}>
      <div className={css['avatar']}>
        <img src={avatarUrl} alt={name || 'Avatar'} />
      </div>
      <div className={css['info']}>
        <h1>{name || 'Новый пользователь'}</h1>
        <strong>E-mail:</strong>
        <span>{email}</span>
        {age ? (
          <>
            <strong>Возраст:</strong>
            <span>{age}</span>
          </>
        ) : null}
      </div>
    </article>
  );
};

export default ProfileCard;
