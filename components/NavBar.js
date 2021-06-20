import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-light'>
        <div className='container'>
          <div className='navbar-header'>
            <Link href='/'>
              <a className={'navbar-brand ' + styles.logo}>
                <Image
                  className='d-inline-block align-text-top'
                  src='/logo.png'
                  alt='Logo'
                  width='40'
                  height='40'
                ></Image>
                <span>D&apos; Bread</span>
              </a>
            </Link>
          </div>
          <div className={'nav navbar-nav navbar-right ' + styles.rightNav}>
            <button
              className={'navbar-toggler ' + styles.toggler}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fas fa-bars'></i>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='nav navbar-nav'>
                <li className='nav-item'>
                  <Link href='/'>
                    <a
                      className={
                        'nav-link' + (router.pathname == '/' ? ' active' : '')
                      }
                      aria-current='page'
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/about-us'>
                    <a
                      className={
                        'nav-link' +
                        (router.pathname == '/about-us' ? ' active' : '')
                      }
                    >
                      About Us
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/contact-us'>
                    <a
                      className={
                        'nav-link' +
                        (router.pathname == '/contact-us' ? ' active' : '')
                      }
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <button
                    type='button'
                    className={'btn btn-link nav-link ' + styles.navBtn}
                  >
                    Sign In
                  </button>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDarkDropdownMenuLink'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Hi, WCC
                  </a>
                  <ul
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='navbarDarkDropdownMenuLink'
                  >
                    <li>
                      <Link href='/my-account'>
                        <a
                          className={
                            'dropdown-item' +
                            (router.pathname == '/my-account' ? ' active' : '')
                          }
                        >
                          My Account
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/my-order'>
                        <a
                          className={
                            'dropdown-item' +
                            (router.pathname == '/my-order' ? ' active' : '')
                          }
                        >
                          My Order
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <i className={'fas fa-shopping-cart ' + styles.cart}>
              <span className={styles.cartNumber}>12</span>
            </i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
