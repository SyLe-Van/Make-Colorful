import styles from './Content.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Content({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('contain')}>{children}</div>
            </div>
        </div>
    );
}

export default Content;
