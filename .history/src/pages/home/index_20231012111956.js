import { useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
const cx = classNames.bind(styles);

const images = [
    'https://mannup.vn/wp-content/uploads/2016/11/ed80c049c0fc414f6c5fdaac9afc6a34.jpg',
    'https://mannup.vn/wp-content/uploads/2015/12/image4.jpeg',
    'https://mannup.vn/wp-content/uploads/2016/06/13178850_10154114141012822_2025959816582053346_n.jpg',
    'https://mannup.vn/wp-content/uploads/2019/08/d4ed63847ca576487a80d35d467405f7.jpg',
    'https://mannup.vn/wp-content/uploads/2017/10/e9bb873393dfe5504866191bc66e28a7-e1509350428917.jpg',
];

const variants = {
    initial: (direction) => {
        return {
            x: direction > 0 ? 200 : -200,
            opacity: 0,
        };
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: 'ease-in',
        transition: {
            x: {
                type: 'spring',
                satisfies: 300,
                damping: 20,
            },
            opacity: {
                duration: 0.2,
            },
        },
    },

    exit: (direction) => {
        return {
            x: direction > 0 ? -200 : 200,
            opacity: 0,
            transition: {
                x: {
                    type: 'spring',
                    satisfies: 300,
                    damping: 20,
                },
                opacity: {
                    duration: 0.2,
                },
            },
        };
    },
};

function Home() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    function nextStep() {
        setDirection(1);
        if (index === images.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    function prevStep() {
        setDirection(-1);
        if (index === 0) {
            setIndex(images.length - 1);
            return;
        }
        setIndex(index - 1);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slideshow')}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        src={images[index]}
                        alt="slides"
                        className={cx('slides')}
                        key={images[index]}
                        custom={direction}
                    />
                </AnimatePresence>
                <button className={cx('prev')} onClick={prevStep}>
                    →
                </button>
                <button className={cx('next')} onClick={nextStep}>
                    ←
                </button>
            </div>
        </div>
    );
}

export default Home;
