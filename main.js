const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navItems = $$('.nav-item');
const courses = $$('.course');

const navActive = $('.nav-item.active');
const line = $('.navigation .line');

line.style.left = navActive.offsetLeft + 'px';
line.style.width = navActive.offsetWidth + 'px';

navItems.forEach((item, index) => {

    const course = courses[index];

    item.onclick = function() {
        $('.nav-item.active').classList.remove('active');
        $('.course.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        course.classList.add('active');
    }
})