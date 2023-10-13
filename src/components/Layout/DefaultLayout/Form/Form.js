import styles from './Form.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Form() {
    return (  
        <div className={cx('wrapper-form')}>
            <form method="POST" action="">
                <div className={cx('form-group1')}>
                    <label for="search-input">Từ khóa</label>
                    <input type="text" name="q" className={cx("form-control1")} id="search-input" placeholder="Nhập từ khóa..."></input>
                </div>

                <div class={cx('form-group2')}>
                    <label for="gender-input">Từ khóa</label>
                    <select name="gender" className={cx("form-control2")} id="gender-input">
                        <option value="">-- Chọn giới tính --</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                </div>

                <button type="submit" className={cx("btn-primary")}>Tìm kiếm</button>
            </form>
        </div>
    )
}

export default Form;