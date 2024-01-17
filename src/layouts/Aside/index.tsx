import css from './style.module.css';
import SiteNav from '../../components/SiteNav';

function Aside() {
  return (
    <aside className={css.root}>
      <SiteNav />
    </aside>
  );
}

export default Aside;
