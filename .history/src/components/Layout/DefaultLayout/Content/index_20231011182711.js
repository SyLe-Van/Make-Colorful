import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Content() {
    return <div className={cx('wrapper')}></div>;
}

export default Content;
