import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <ul className={cx('menu')}>
                    <li>
                        <a href="http://localhost:2002/lifestyle"></a>LIFESTYLE
                    </li>
                    <li>
                        <a href="http://localhost:2002/fashion"></a>FASHION
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
