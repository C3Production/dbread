import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href='https://www.facebook.com/D-Bread-111968957785306'>
          <div className={styles.logo}>
            <Image
              src='/facebook.png'
              alt='Facebook Logo'
              height={16}
              width={16}
            />
          </div>
        </a>
        <a href='https://www.instagram.com/d_bread.c3/'>
          <div className={styles.logo}>
            <Image
              src='/instagram.png'
              alt='Instagram Logo'
              height={16}
              width={16}
            />
          </div>
        </a>
      </footer>
    </>
  );
}
