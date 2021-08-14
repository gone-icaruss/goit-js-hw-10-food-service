const refs = {
    themeBtn: document.querySelector('.theme-switch_marker'),
    body: document.querySelector('body')
};

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const basicTheme = localStorage.setItem('body_theme', theme.LIGHT);

const checkTheme = function () {
    if (localStorage.getItem('check') === 'true') {
        (refs.themeBtn.check === 'true');
        localStorage.setItem('bodyTheme', theme.LIGHT)
        refs.body.classList.remove('theme.LIGHT')
        refs.body.classList.add('theme.DARK')
    } else {
        refs.themeBtn.check === 'false'
    }
};

function startTheme() {
    refs.body.classList.add(theme.LIGHT),
        localStorage.setItem('bodyTheme', theme.LIGHT)
};

function themeLight() {
    if(localStorage.getItem('bodyTheme', theme.LIGHT)){
        refs.body.classList.remove(theme.DARK)
        refs.body.classList.add(theme.LIGHT)
        localStorage.setItem('bodyTheme', themeLIGHT)
        localStorage.setItem('check', true)
    }
}

function themeDark() {
    if (localStorage.getItem('bodyTheme', themeDARK)) {
        refs.body.classList.remove(theme.LIGHT)
        refs.body.classList.add(theme.DARK)
        localStorage.setItem('bodyTheme', themeDARK)
        localStorage.setItem('check', false)
    }
}



