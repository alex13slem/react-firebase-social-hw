import css from './style.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Form, Link } from 'react-router-dom';
import { useUserAuth } from '../../store/userAuth';
import SiteLogo from '../../assets/svg/siteLogo.svg?react';
import { useRef } from 'react';

function Header() {
  const { currentUser } = useUserAuth();
  const modalLogout = useRef<HTMLDialogElement>(null);

  return (
    <header className={css.root}>
      <Link className={css['index-link']} to={'/'}>
        <SiteLogo />
      </Link>
      <div className={css['panel']}>
        <div className={css['panel-left']}></div>
        <div className={css['panel-right']}>
          {currentUser && (
            <p className={css.username}>
              {currentUser.displayName || currentUser.email}
            </p>
          )}
          {currentUser?.photoURL && (
            <img
              className={css.userAvatar}
              src={currentUser.photoURL}
              alt={currentUser.displayName || 'userPhoto'}
            />
          )}
          {currentUser ? (
            <button
              className={css.authBtn}
              onClick={() => modalLogout.current?.showModal()}
            >
              <Icon icon="material-symbols:logout" />
            </button>
          ) : (
            <Link className={css.authBtn} to={'/auth'}>
              <button>
                <Icon icon="material-symbols:login" />
              </button>
            </Link>
          )}
        </div>
      </div>
      <dialog className={css['modalLogout']} ref={modalLogout}>
        <strong>Вы точно хотите выйти?</strong>
        <div className={css['modalLogout-buttons']}>
          <Form method="post" action="/logout">
            <button
              className={css['accent']}
              onClick={() => modalLogout.current?.close()}
            >
              Выход
            </button>
          </Form>
          <form method="dialog">
            <button>Отмена</button>
          </form>
        </div>
      </dialog>
    </header>
  );
}

export default Header;
