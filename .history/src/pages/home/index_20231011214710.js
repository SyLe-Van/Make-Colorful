import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slides')}>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2015/12/image4.jpg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
