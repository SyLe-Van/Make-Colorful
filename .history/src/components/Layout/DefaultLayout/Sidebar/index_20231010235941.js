import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShapes } from '@fortawesome/free-solid-svg-icons';

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
            <button className={cx('bars')}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </aside>
    );
}

export default Sidebar;
