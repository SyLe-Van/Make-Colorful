import Header from './Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import Content from './Content';
import Home from '~/pages/home';
const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />

            <div className={cx('container')}>
                <Home />
            </div>
        </div>
    );
}

export default DefaultLayout;
