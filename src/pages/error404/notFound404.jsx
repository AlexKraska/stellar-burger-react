import React from 'react';
import { Link } from 'react-router-dom';

import styles from './notFound404.module.css';

export function NotFound404() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <Breadcrumbs /> */}
        <div className={styles.content}>
          <h1>Уууупс! Ошибочка 404</h1>
          <p>Запрашиваемая вами страница недоступна</p>
          <br />
          <br />
          <p>Проверьте адрес или попробуйте тыкнуть сюда <Link to='/' className={styles.textLink}>Домашняя страница</Link></p>
        </div>
      </div>
    </div>
  );
}