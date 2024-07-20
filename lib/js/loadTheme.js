function loadTheme() {
    document.body.classList.remove('system-theme', 'light-theme', 'dark-theme');
    let theme = localStorage.getItem('theme')
    if (theme === null) theme = 'system-theme'
    window.addEventListener('load', () => document.getElementById('select-theme').value = theme)

    if (theme === 'system-theme' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementsByTagName('html')[0].classList.value = 'dark-theme'
        // document.body.classList.add('dark-theme');
    } else {
        document.getElementsByTagName('html')[0].classList.value = theme
        // document.body.classList.add(theme);
    }
}

loadTheme()