import styles from './Content.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <h2>Noi dung</h2>
        </div>
    );
}

export default Content;
