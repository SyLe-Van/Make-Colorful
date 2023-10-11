import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
function Contact() {
    return (
        <div className="wrapper">
            <ul>
                <li>
                    <a href="https://www.facebook.com/sy.cung.7">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{ color: '#000000' }} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: '#000000' }} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
