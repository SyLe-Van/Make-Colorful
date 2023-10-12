import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');
    let active = 0;
    let lengthItems = items.length - 1;
    next.onclick = function () {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    };
    let refreshInterval = setInterval(() => {
        next.click();
    }, 3000);
    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';
        //
        let last_active_dot = document.querySelector('.slider .dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 3000);
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slides')}>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2015/12/image4.jpeg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2016/06/13178850_10154114141012822_2025959816582053346_n.jpg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2019/08/d4ed63847ca576487a80d35d467405f7.jpg" />
                    </div>
                    <div className={cx('item')}>
                        <img src="https://mannup.vn/wp-content/uploads/2017/10/e9bb873393dfe5504866191bc66e28a7-e1509350428917.jpg" />
                    </div>
                </div>
            </div>
            {/* button prev and next */}
            <div className={cx('buttons')}>
                <button className={cx('prev')}>
                    <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" style={{ color: 'ffffff' }} />
                </button>
                <button className={cx('next')}>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" style={{ color: 'ffffff' }} />
                </button>
            </div>
            <div className={cx('dots')}>
                <li className={cx('active')}></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>
        </div>
    );
}
export default Home;
