import Categories from '../components/Categories';
import Header from '../components/Header';
import Search from '../components/Search';
import Sort from '../components/Sort';
import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Search />
      <div className={styles.sorting}>
        <Categories />
        <Sort />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
