export function navPart(){
    const nav = document.querySelector('.mobile-nav');
    const navMenuBtn = document.querySelector('.nav-menu-btn');
    const navCloseBtn = document.querySelector('.nav-close-btn');

    // navToggle function
    const navToggleFunc = function () { nav?.classList.toggle('active'); }
    navMenuBtn?.addEventListener('click', navToggleFunc);
    navCloseBtn?.addEventListener('click', navToggleFunc);

    // theme toggle variables
    const themeBtn = document.querySelectorAll('.theme-btn') as NodeListOf<HTMLElement>;
    const body = document.body;

    // Function to set the theme based on user preference
    function setTheme(theme: string): void {
        // Toggle classes on body
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(theme);

        // Toggle classes on theme buttons
        for (let i = 0; i < themeBtn.length; i++) {
            themeBtn[i].classList.toggle('light', theme === 'light-theme');
            themeBtn[i].classList.toggle('dark', theme === 'dark-theme');
        }

        // Save the user preference in localStorage
        localStorage.setItem('themePreference', theme);
    }

    // Check if the user has a saved theme preference
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Add click event listeners to theme buttons
    for (let i = 0; i < themeBtn.length; i++) {
        themeBtn[i].addEventListener('click', function () {
            const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
            const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';

            // Call setTheme to apply the new theme
            setTheme(newTheme);
        });
    }

}