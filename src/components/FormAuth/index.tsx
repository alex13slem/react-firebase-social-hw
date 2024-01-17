import css from './style.module.css';

import { Icon } from '@iconify/react';
import { Form } from 'react-router-dom';

function FormAuth() {
  return (
    <Form method="post" className={css.form}>
      <h2>Войти с помощью Google</h2>
      <button className={css.submitBtn}>
        <Icon icon="mdi:google" />
      </button>
    </Form>
  );
}

export default FormAuth;
