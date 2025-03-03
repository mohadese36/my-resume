// work
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".inner-work-content-btns button");
    const jobs = document.querySelectorAll(".inner-work-content-job");
    const highlight = document.querySelector(".jobs__StyledHighlight");

    jobs.forEach((job, index) => {
        job.style.display = index === 0 ? "block" : "none";
    });


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {

            jobs.forEach(job => job.style.display = "none");

            jobs[index].style.display = "block";


            highlight.style.top = `${button.offsetTop}px`;
            highlight.style.height = `${button.offsetHeight}px`;
        });
    });
});


////////////////////

// hamburgre menu

document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu-container');
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('#closeButton');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.menu-container a');
    const overlay = document.querySelector('.overlay');

    // هنگام تغییر زبان (فارسی به انگلیسی یا بالعکس)
    const changeLanguageBtn = document.querySelector('#change-language');
    changeLanguageBtn.addEventListener('click', function() {
        // منو را ببندیم و انیمیشن‌های قبلی را ری‌ست کنیم
        menuContainer.classList.remove('open');
        overlay.style.display = 'none';
        if (body.classList.contains('rtl')) {
            menuContainer.style.left = '-100%';
            menuContainer.style.right = 'auto';
        } else {
            menuContainer.style.right = '-100%';
            menuContainer.style.left = 'auto';
        }
    });

    // هنگام کلیک روی همبرگر، وضعیت منو تغییر می‌کند
    hamburger.addEventListener('click', function() {
        // اگر منو باز باشد، آن را ببند
        if (menuContainer.classList.contains('open')) {
            if (body.classList.contains('rtl')) {
                menuContainer.style.left = '-100%';
                menuContainer.style.right = 'auto';
            } else {
                menuContainer.style.right = '-100%';
                menuContainer.style.left = 'auto';
            }
            menuContainer.classList.remove('open');
            overlay.style.display = 'none'; // مخفی کردن دیو مات
        } else {
            // اگر منو بسته باشد، آن را باز کن
            if (body.classList.contains('rtl')) {
                menuContainer.style.left = '0';
                menuContainer.style.right = 'auto';
            } else {
                menuContainer.style.right = '0';
                menuContainer.style.left = 'auto';
            }
            menuContainer.classList.add('open');
            overlay.style.display = 'block'; // نمایش دیو مات
        }
    });

    closeButton.addEventListener('click', function() {
        if (body.classList.contains('rtl')) {
            menuContainer.style.left = '-100%';
            menuContainer.style.right = 'auto';
        } else {
            menuContainer.style.right = '-100%';
            menuContainer.style.left = 'auto';
        }
        menuContainer.classList.remove('open');
        overlay.style.display = 'none'; // مخفی کردن دیو مات
    });

    // بستن منو پس از کلیک روی لینک‌ها
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (body.classList.contains('rtl')) {
                menuContainer.style.left = '-100%';
                menuContainer.style.right = 'auto';
            } else {
                menuContainer.style.right = '-100%';
                menuContainer.style.left = 'auto';
            }
            menuContainer.classList.remove('open');
            overlay.style.display = 'none'; // مخفی کردن دیو مات
        });
    });
});


// adress link menus

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // جلوگیری از بارگذاری پیش‌فرض لینک

            console.log("clicked");

            // پیدا کردن آیتم هدف از روی href
            const targetId = this.getAttribute('href').substring(1); // حذف # از آدرس

            // پیدا کردن عنصر هدف
            const targetElement = document.getElementById(targetId);

            // اسکرول به عنصر هدف
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // تنظیم مکان قرارگیری در بالا
            });
        });
    });
});


/////////////////تایتل





