import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import type { UserProfile } from '../../types/users';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  user: UserProfile;
}

const UsersDeckItem: FC<Props> = ({ user }) => {
  const { age, avatarUrl, name, email } = user;

  return (
    <article className={css.root}>
      <div className={css['avatar']}>
        <img src={avatarUrl || ''} alt={name || 'user avatar'} />
      </div>
      <div className={css['info']}>
        <h2>{name}</h2>
        {age ? (
          <>
            <div className={css['info-item']}>
              <strong>Возраст: </strong>
              <span>{age}</span>
            </div>
          </>
        ) : null}
        <div className={css['info-item']}>
          <strong>Email: </strong>
          <a href={'mailto:' + email}>{email}</a>
        </div>
      </div>
    </article>
  );
};

export default UsersDeckItem;
