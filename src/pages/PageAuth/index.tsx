import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';
import FormAuth from '../../components/FormAuth';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const PageAuth: FC<Props> = () => {
  return (
    <section className={css.root}>
      <FormAuth />
    </section>
  );
};

export default PageAuth;
