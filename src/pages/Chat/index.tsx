import { ComponentProps, FC, HTMLAttributes } from 'react';
import css from './style.module.css';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const Chat: FC<Props> = () => {
  return <section className={css.root}>Chat</section>;
};

export default Chat;
