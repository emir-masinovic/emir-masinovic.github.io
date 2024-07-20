const selectHTML = document.getElementById('select-theme')
selectHTML.addEventListener('change', changeTheme);

function changeTheme(event) {
    const selectedTheme = event.target.value;
    localStorage.setItem('theme', selectedTheme);
    document.body.classList.remove('system-theme', 'light-theme', 'dark-theme');

    if (selectedTheme === 'system-theme' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // document.body.classList.add('dark-theme');
         document.getElementsByTagName('html')[0].classList.value = 'dark-theme'
    } else {
        // document.body.classList.add(selectedTheme);
         document.getElementsByTagName('html')[0].classList.value = selectedTheme
    }
}