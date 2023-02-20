import Link from 'next/link';

import styles from './NavLink.module.css';

interface pageProps{
  text: string;
  href: string;
}

export const NavLink = ({text, href}: pageProps) => {
  if (!href) {
    return (
      <button className={styles.btn}>
        {text}
      </button>
    )
  };
  return (
    <Link href={href} passHref>
      <button className={styles.btn}>
        {text}
      </button>
    </Link>
  )
}