import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <ul className={cx('menu')}>
                    <li>LIFESTYLE</li>
                    <li>FASHION</li>
                    <li>GROOMING</li>
                    <li>CIMEMA</li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
