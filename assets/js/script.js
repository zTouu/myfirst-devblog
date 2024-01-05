'use strict';

function header(){
  return`
  <header>
  <div class="container">
    <nav class="navbar">
      <a href="index.html">
        <img
          src="./assets/images/logo-light.svg"
          alt="Devblog's logo"
          width="150"
          height="40"
          class="logo-light"
        />
        <img
          src="./assets/images/logo-dark.svg"
          alt="Devblog's logo"
          width="150"
          height="40"
          class="logo-dark"
        />
      </a>

      <div class="btn-group">
        <button class="theme-btn theme-btn-mobile light">
          <ion-icon name="moon" class="moon"></ion-icon>
          <ion-icon name="sunny" class="sun"></ion-icon>
        </button>

        <button class="nav-menu-btn">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>

      <div class="flex-wrapper">
        <ul class="desktop-nav">
          <li>
            <a href="index.html" class="nav-link">Home</a>
          </li>

          <li>
            <a href="#" class="nav-link">About Me</a>
          </li>

          <li>
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>

        <button class="theme-btn theme-btn-desktop light">
          <ion-icon name="moon" class="moon"></ion-icon>
          <ion-icon name="sunny" class="sun"></ion-icon>
        </button>
      </div>

      <div class="mobile-nav">
        <button class="nav-close-btn">
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="wrapper">
          <p class="h3 nav-title">Main Menu</p>

          <ul>
            <li class="nav-item">
              <a href="index.html" class="nav-link">Home</a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">About Me</a>
            </li>

            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <p class="h3 nav-title">Topics</p>

          <ul>
            <li class="nav-item">
              <a href="SecureDB.html" class="nav-link">Database</a>
            </li>

            <li class="nav-item">
              <a href="accessTips.html" class="nav-link">Accessibility</a>
            </li>

            <li class="nav-item">
              <a href="tool2024.html" class="nav-link">Web Performance</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>`
}
document.body.insertAdjacentHTML("afterbegin",header());

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

function footer(){
  return `
  <footer>
  <div class="container">
    <div class="wrapper">
      <a href="index.html" class="footer-logo">
        <img
          src="./assets/images/logo-light.svg"
          alt="DevBlog's Logo"
          width="150"
          height="40"
          class="logo-light"
        />
        <img
          src="./assets/images/logo-dark.svg"
          alt="DevBlog's Logo"
          width="150"
          height="40"
          class="logo-dark"
        />
      </a>

      <p class="footer-text">
        Learn about Web accessibility, Web performance, and Database
        management.
      </p>
    </div>

    <div class="wrapper">
      <p class="footer-title">Quick Links</p>

      <ul>
        <li>
          <a href="#contact" class="footer-link">Advertise with us</a>
        </li>

        <li>
          <a href="#" class="footer-link">About Us</a>
        </li>

        <li>
          <a href="#contact" class="footer-link">Contact Us</a>
        </li>
      </ul>
    </div>

    <div class="wrapper">
      <p class="footer-title">Legal Stuff</p>

      <ul>
        <li>
          <a href="#" class="footer-link">Privacy Notice</a>
        </li>

        <li>
          <a href="#" class="footer-link">Cookie Policy</a>
        </li>

        <li>
          <a href="#" class="footer-link">Terms Of Use</a>
        </li>
      </ul>
    </div>
  </div>

  <p class="copyright">
    &copy; Copyright 2023 <a href="index.html">ninvitou</a>
  </p>
</footer>
  `
}
document.body.insertAdjacentHTML('beforeend',footer());


