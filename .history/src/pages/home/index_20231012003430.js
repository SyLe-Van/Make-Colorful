import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
const cx = classNames.bind(styles);

function Home() {
    const Slider = () => {
        const [activeSlide, setActiveSlide] = useState(0);
        const [items, setItems] = useState([]);

        useEffect(() => {
            const slider = document.querySelector('.slider .list');
            const items = document.querySelectorAll('.slider .list .item');
            setItems(items);
        }, []);

        const nextSlide = () => {
            setActiveSlide(activeSlide + 1 <= items.length - 1 ? activeSlide + 1 : 0);
        };

        const prevSlide = () => {
            setActiveSlide(activeSlide - 1 >= 0 ? activeSlide - 1 : items.length - 1);
        };

        return (
            <div className="slider">
                <ul className="list">
                    {items.map((item, index) => (
                        <li className="item" key={index}>
                            {/* Content of slide */}
                        </li>
                    ))}
                </ul>
                <button className="prev" onClick={prevSlide}>
                    Previous
                </button>
                <button className="next" onClick={nextSlide}>
                    Next
                </button>
                <ul className="dots">
                    {items.map((item, index) => (
                        <li key={index} className={`dot ${index === activeSlide ? 'active' : ''}`}></li>
                    ))}
                </ul>
            </div>
        );
    };
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
