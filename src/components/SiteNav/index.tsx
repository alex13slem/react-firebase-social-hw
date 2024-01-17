import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import { NavLink } from 'react-router-dom';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const SiteNav: FC<Props> = () => {
  return (
    <nav className={css.root}>
      <NavLink to="/">Моя страница</NavLink>
      <NavLink to="/friends">Друзья</NavLink>
      <NavLink to="/chat">Мессенджер</NavLink>
    </nav>
  );
};

export default SiteNav;
