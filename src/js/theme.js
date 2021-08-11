const refs = {
    themeBtn: document.querySelector('.theme-switch_marker'),
    body: document.querySelector('body')
};

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const basicTheme = localStorage.setItem('body_theme', theme.LIGHT)

const checkTheme = function () {
    if (localStorage.setItem('check') === 'true'){
        (refs.themeBtn.check === 'true');
        refs.body.classList.add('theme.DARK')
    } else {
        refs.themeBtn.check === 'false'
    }
}