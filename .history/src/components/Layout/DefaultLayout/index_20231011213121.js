import Header from './Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <Sidebar />
            </div>
            <div className={cx('content')}>
                <Home />
            </div>
        </div>
    );
}

export default DefaultLayout;
