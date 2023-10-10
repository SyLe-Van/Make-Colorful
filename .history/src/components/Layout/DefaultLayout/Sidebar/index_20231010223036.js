import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <ul className={cx('menu')}>
                    <li>
                        <a href="http://localhost:2002/lifestyle">LIFESTYLE</a>
                    </li>
                    <li>
                        <a href="http://localhost:2002/fashion">FASHION</a>
                    </li>
                    <li>
                        <a href="http://localhost:2002/cinema">CINEMA</a>
                    </li>
                    <li>
                        <a href="http://localhost:2002/grooming">GROOMING</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
