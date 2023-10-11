import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Home from '~/pages/home';
const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('contain')}>
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default Content;
