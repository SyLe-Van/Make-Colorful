import Header from './Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="contain">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
