import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer}></div>
        <div className={styles.social}>
          <a href='https://www.facebook.com/D-Bread-111968957785306'>
            <div className={styles.logo}>
              <Image
                src='/facebook.png'
                alt='Facebook Logo'
                height={30}
                width={30}
              />
            </div>
          </a>
          <a href='https://www.instagram.com/d_bread.c3/'>
            <div className={styles.logo}>
              <Image
                src='/instagram.png'
                alt='Instagram Logo'
                height={30}
                width={30}
              />
            </div>
          </a>
          <a href='https://goo.gl/maps/gSaAFq1Jw7CSz6Li7'>
            <div className={styles.logo}>
              <Image
                src='/map.png'
                alt='Google Maps Logo'
                height={30}
                width={30}
              />
            </div>
          </a>
        </div>
        <div className={styles.copyright}>
          <p>
            Copyright © 2021 D Little Bread Cafe (003287573-D). All Rights
            Reserved.{' '}
            <Link href='/terms-of-service'>
              <a>Terms of Service</a>
            </Link>{' '}
            |{' '}
            <Link href='/privacy-policy'>
              <a>Privacy Policy</a>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
