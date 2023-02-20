import styles from './Navbar.module.css';
import { NavLink } from '../navlink/NavLink';

const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <NavLink text='Home' href='/' />
      <NavLink text='Inputs' href='/inputs' />
      <NavLink text='Query Client' href='/queryClient' />
      <NavLink text='Static Site Generation' href='/staticSiteGeneration' />
      <NavLink text='Incremental Path Generation' href='/incrementalPaths/1' />
    </div>
  );
};

export default Navbar;
