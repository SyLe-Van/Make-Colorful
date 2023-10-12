import { Home } from '~/pages/home';
function ImageSlide() {
    let refreshInterval;
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    // Kiểm tra xem biến `next` có phải là `null` hay không
    if (next) {
        next.onclick = function () {
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        };
    } else {
        next.onclick = function () {
            // Tạo một đối tượng `Button` mới
            const button = document.createElement('button');
            button.textContent = 'Next';
            button.onclick = function () {
                active = active + 1 <= lengthItems ? active + 1 : 0;
                reloadSlider();
            };
            // Thêm đối tượng `Button` vào DOM
            document.querySelector('.slider').appendChild(button);
        };
    }

    // Kiểm tra xem biến `prev` có phải là `null` hay không
    if (prev) {
        prev.onclick = function () {
            active = active - 1 >= 0 ? active - 1 : lengthItems;
            reloadSlider();
        };
    } else {
        prev.onclick = function () {
            // Tạo một đối tượng `Button` mới
            const button = document.createElement('button');
            button.textContent = 'Previous';
            button.onclick = function () {
                active = active - 1 >= 0 ? active - 1 : lengthItems;
                reloadSlider();
            };
            // Thêm đối tượng `Button` vào DOM
            document.querySelector('.slider').appendChild(button);
        };
    }

    // ...

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

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        });
    });
    window.onresize = function (event) {
        reloadSlider();
    };
}

export default ImageSlide;
