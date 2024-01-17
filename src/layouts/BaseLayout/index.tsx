import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import Header from '../Header';
import Aside from '../Aside';
import Main from '../Main';
import { Outlet } from 'react-router-dom';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {
  asideDisable?: boolean;
}

const BaseLayout: FC<Props> = ({ children, asideDisable = false }) => {
  return (
    <div className={css.root}>
      <Header />
      {!asideDisable && <Aside />}
      <Main>
        {children}
        <Outlet />
      </Main>
    </div>
  );
};

export default BaseLayout;
