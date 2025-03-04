
let currentLanguage = localStorage.getItem('lang') || 'en';
const changeLanguageButton = document.getElementById('change-language');

defineLanguageAttributes(currentLanguage);

document.addEventListener('DOMContentLoaded', () => loadLanguage(currentLanguage));
changeLanguageButton.addEventListener('click', toggleLanguage);



function defineLanguageAttributes(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.body.classList.toggle('rtl', lang === 'fa');
    document.body.classList.toggle('ltr', lang === 'en');
    changeLanguageButton.innerHTML = `<img src="images/lang-btn.png" alt="lang-btn"><span>${lang === 'fa' ? 'English' : 'Persian'}</span>`;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fa' ? 'en' : 'fa';
    localStorage.setItem('lang', currentLanguage);
    defineLanguageAttributes(currentLanguage);
    loadLanguage(currentLanguage);
}

// function loadLanguage(lang) {
//     fetch(`lang/${lang}.json`)
//         .then(response => response.json())
//         .then(data => {
//             updateTextContent({
//                 "#nav-about a": data.header.menuContainer.menuLinks.about,
//                 "#nav-work a": data.header.menuContainer.menuLinks.work,
//                 "#nav-services a": data.header.menuContainer.menuLinks.services,
//                 "#nav-contact a": data.header.menuContainer.menuLinks.contact,
//                 ".resume-link": data.header.menuContainer.resume,
//                 "#intro-text": data.infoSection.introText,
//                 "#name": data.infoSection.name,
//                 "#job-title": data.infoSection.jobTitle,
//                 "#description": data.infoSection.description,
//                 "#projects-btn": data.infoSection.projectsButton,
//                 "#nextjs-link": 'Next.js',
//                 "#about-title": `<span>◆</span> ${data.aboutSection.title} <span class="line"></span>`,
//                 "#about-text-1": data.aboutSection.text1,
//                 "#about-text-2": data.aboutSection.text2,
//                 "#about-text-3": data.aboutSection.text3,
//                 "#about-text-4": data.aboutSection.text4,
//                 "#work-title": `<span>◆</span> ${data.work.title} <span class="line"></span>`,
//                 "#services-title": data.services.title,
//                 "#contact-title": data.contact.title,
//                 "#contact-description-1": data.contact.description1,
//                 "#contact-description-2": data.contact.description2,
//                 "#contact-link": data.contact.link,
//                 "#closeButton": data.header.menuContainer.closeButton,

//                 "#btn-web-development": data.work.buttons.webDevelopment,
//                 "#btn-freelance-work": data.work.buttons.freelanceWork,
//                 "#btn-design-editing": data.work.buttons.designEditing,
//                 "#btn-wordpress": data.work.buttons.wordpress,
//                 "#btn-seo": data.work.buttons.seo,
//                 "#btn-tools-technologies": data.work.buttons.toolsTechnologies
//             });
            
//             updateListContent("#tech-list", data.aboutSection.techList);
//             updateWorkSections(data.work.jobs);
//             updateServiceSections(data.services.items);
//         })
//         .catch(error => console.error('Error loading language:', error));
// }


function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // به روز رسانی محتوای منو
            updateTextContent({
                "#nav-about a": data.header.menuContainer.menuLinks.about,
                "#nav-work a": data.header.menuContainer.menuLinks.work,
                "#nav-services a": data.header.menuContainer.menuLinks.services,
                "#nav-contact a": data.header.menuContainer.menuLinks.contact,
                ".resume-link": data.header.menuContainer.resume,
                "#intro-text": data.infoSection.introText,
                "#name": data.infoSection.name,
                "#job-title": data.infoSection.jobTitle,
                "#description": data.infoSection.description,
                "#projects-btn": data.infoSection.projectsButton,
                "#nextjs-link": 'Next.js',
                "#about-title": `<span>◆</span> ${data.aboutSection.title} <span class="line"></span>`,
                "#about-text-1": data.aboutSection.text1,
                "#about-text-2": data.aboutSection.text2,
                "#about-text-3": data.aboutSection.text3,
                "#about-text-4": data.aboutSection.text4,
                "#work-title": `<span>◆</span> ${data.work.title} <span class="line"></span>`,
                "#services-title": data.services.title,
                "#contact-title": data.contact.title,
                "#contact-description-1": data.contact.description1,
                "#contact-description-2": data.contact.description2,
                "#contact-link": data.contact.link,
                "#closeButton": data.header.menuContainer.closeButton,

                "#btn-web-development": data.work.buttons.webDevelopment,
                "#btn-freelance-work": data.work.buttons.freelanceWork,
                "#btn-design-editing": data.work.buttons.designEditing,
                "#btn-wordpress": data.work.buttons.wordpress,
                "#btn-seo": data.work.buttons.seo,
                "#btn-tools-technologies": data.work.buttons.toolsTechnologies
            });
            
            // به روز رسانی لینک ایمیل
            const emailLink = document.getElementById("contact-link");
            if (lang === "fa") {
                emailLink.href = data.contact.email.fa;  // لینک ایمیل برای فارسی
            } else if (lang === "en") {
                emailLink.href = data.contact.email.en;  // لینک ایمیل برای انگلیسی
            }

            // به روز رسانی محتوای لیست‌ها و بخش‌ها
            updateListContent("#tech-list", data.aboutSection.techList);
            updateWorkSections(data.work.jobs);
            updateServiceSections(data.services.items);
        })
        .catch(error => console.error('Error loading language:', error));
}







function updateTextContent(elements) {
    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = text;
    }
}

function updateListContent(selector, items) {
    const list = document.querySelector(selector);
    if (list) {
        list.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

function updateWorkSections(jobs) {
    jobs.forEach(job => {
        updateTextContent({
            [`#${job.id}-title`]: job.title,
            [`#${job.id}-date`]: job.date
        });
        updateListContent(`#${job.id}-tasks`, job.tasks);
    });
}

function updateServiceSections(services) {
    services.forEach(service => {
        updateTextContent({
            [`#${service.id}-title`]: service.title,
            [`#${service.id}-description`]: service.description
        });
    });
}

///////////////////title

document.getElementById('change-language').addEventListener('click', function() {
    const pageTitle = document.getElementById('page_title');
    const headTitle = document.querySelector('head title');
    const langButton = document.getElementById('change-language').querySelector('span');
    
    if (pageTitle.innerHTML === 'رزومه من') {
        pageTitle.innerHTML = 'My Resume';
        headTitle.innerHTML = 'My Resume';
    } else {
        pageTitle.innerHTML = 'رزومه من';
        headTitle.innerHTML = 'رزومه من';
    }
  });