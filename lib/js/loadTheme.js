function loadTheme() {
    document.body.classList.remove('system', 'light-theme', 'dark-theme');
    let theme = localStorage.getItem('theme')
    if (theme === null) theme = 'system-theme'
    window.addEventListener('load', () => document.getElementById('select-theme').value = theme)

    if (theme === 'system-theme' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add(theme);
    }
}

loadTheme()