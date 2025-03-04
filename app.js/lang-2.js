

let currentLanguage = localStorage.getItem('lang') || 'en'; 


const changeLanguageButton = document.getElementById('change-language');

function defineLanguageAttributes(lang) {

  document.documentElement.setAttribute('lang', lang);
  document.body.classList.toggle('rtl', lang === 'fa');
  document.body.classList.toggle('ltr', lang === 'en');
  

  if (changeLanguageButton) {
    changeLanguageButton.innerHTML = `<img src="images/lang-btn.png" alt="lang-btn"><span>${lang === 'fa' ? 'English' : 'Persian'}</span>`;
  } else {
    console.warn("دکمه تغییر زبان پیدا نشد!");
  }
}

const loadLanguage = (lang) => {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {

      document.getElementById('name').textContent = data.sidebar.name;
      document.getElementById('position').textContent = data.sidebar.position;
      document.getElementById('description').innerHTML = data.sidebar.description;


      ['about', 'experience', 'projects'].forEach(linkID => {
        const navLink = document.getElementById(`navbar-${linkID}`);
        if (navLink) navLink.innerHTML = `${data.headerNav[linkID]}`;
      });
  
            const navLinks = ['about', 'experience', 'projects'];
            navLinks.forEach(linkId => {
              const navLink = document.getElementById(`nav-${linkId}`);
              navLink.innerHTML = `<span></span>${data.nav[linkId]}`; 
            });

      document.getElementById('social-github').href = data.social.github;
      document.getElementById('social-linkedin').href = data.social.linkedin;
      document.getElementById('social-instagram').href = data.social.instagram;


      document.getElementById('about-heading').textContent = data.about.title;
      document.getElementById('about-first-paragraph').innerHTML = data.about.firstParagraph;
      document.getElementById('about-second-paragraph').textContent = data.about.secondParagraph;
      document.getElementById('about-third-paragraph').textContent = data.about.thirdParagraph;
      document.getElementById('about-fourth-paragraph').textContent = data.about.fourthParagraph;


      document.getElementById('experience-title').textContent = data.experience.title;


      const experienceCards = document.querySelectorAll('.experience-card');
      experienceCards.forEach((card, index) => {
        if (index < data.experience.cards.length) {
          card.querySelector('h3').textContent = data.experience.cards[index].title;

          const iconSpan = document.createElement('span');
          iconSpan.classList.add('material-symbols-outlined', 'arrow');
          iconSpan.textContent = data.experience.cards[index].icon;
          card.querySelector('h3').appendChild(iconSpan);

          const subtitles = card.querySelectorAll('.experience-card-title p');
          if (subtitles.length > 0) subtitles[0].textContent = data.experience.cards[index].subtitle1;
          if (subtitles.length > 1) subtitles[1].textContent = data.experience.cards[index].subtitle2;
          card.querySelector('p[id="card-description"]').innerHTML = data.experience.cards[index].description;
        }
      });

      document.getElementById('resume-link').innerHTML = data.experience.viewResume;


      document.getElementById('projects-title').textContent = data.projects.title;


      const projectCards = document.querySelectorAll('.project-box');
      projectCards.forEach((card, index) => {
        if (index < data.projects.cards.length) {
          card.querySelector('h3').innerHTML = data.projects.cards[index].title;
          card.querySelector('p').innerHTML = data.projects.cards[index].description;
          card.querySelector('.project-stats span').innerHTML = data.projects.cards[index].stats;
        }
      });

      document.querySelector('.archive-project-container a').innerHTML = data.projects.moreInfo;

 
      document.getElementById('footer-text').innerHTML = data.footer.text;

      defineLanguageAttributes(lang);
    })
    .catch(error => console.error('Error loading language:', error));
};


document.getElementById('change-language').addEventListener('click', () => {
  currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';
  localStorage.setItem('lang', currentLanguage); 
  loadLanguage(currentLanguage);
});


// document.addEventListener('DOMContentLoaded', () => {
//   loadLanguage(currentLanguage);
// });

window.onload = function() {
  loadLanguage(currentLanguage);
};


////////////////title

document.getElementById('change-language').addEventListener('click', function() {
  const pageTitle = document.getElementById('page_title');
  const headTitle = document.querySelector('head title');
  const langButton = document.getElementById('change-language').querySelector('span');
  
  if (pageTitle.innerHTML === 'اطلاعات رزومه من') {
      pageTitle.innerHTML = 'My Resume Information';
      headTitle.innerHTML = 'My Resume Information';
  } else {
      pageTitle.innerHTML = 'اطلاعات رزومه من';
      headTitle.innerHTML = 'اطلاعات رزومه من';
  }
});







