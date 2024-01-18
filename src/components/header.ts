export function header(){
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