import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Page404: FC<Props> = () => {
  return (
    <div className={css.root}>
      <h1>Такой страницы не существует :(</h1>
    </div>
  );
};

export default Page404;
