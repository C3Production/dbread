import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href='https://www.facebook.com/D-Bread-111968957785306'>
          <img
            src='/facebook.png'
            alt='Facebook Logo'
            className={styles.logo}
          />{' '}
        </a>
        <a href='https://www.instagram.com/d_bread.c3/'>
          <img
            src='/instagram.png'
            alt='Instagram Logo'
            className={styles.logo}
          />{' '}
        </a>
      </footer>
    </>
  );
}
