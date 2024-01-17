import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Main: FC<Props> = ({ children }) => {
  return <main className={css.root}>{children}</main>;
};

export default Main;
