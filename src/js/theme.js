const refs = {
    themeBtn: document.getElementById('theme-switch-toggle'),
    body: document.querySelector('body')
};

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkTheme();

themeDark();
themeLight();

refs.themeBtn.addEventListener('change', toggle => {
    toggle.target.checked ? themeDark() : themeLight()
});

// const basicTheme = localStorage.setItem('body_theme', theme.LIGHT);

function basicTheme() {
    refs.body.classList.add(theme.LIGHT);
    localStorage.setItem('body_theme', theme.LIGHT);
};

function checkTheme () {
   if (localStorage.getItem('check') === 'true') {
        (refs.themeBtn.check === true);
        localStorage.setItem('body_theme', theme.LIGHT)
        refs.body.classList.remove(theme.LIGHT)
        refs.body.classList.add(theme.DARK);
    } else {
       (refs.themeBtn.check === false)
   }
};


function themeLight() {
    if(localStorage.getItem('body_theme', theme.LIGHT)){
        refs.body.classList.remove(theme.DARK)
        refs.body.classList.add(theme.LIGHT)
        localStorage.setItem('body_theme', theme.LIGHT)
        localStorage.setItem('check', true)
    }
};

function themeDark() {
    if (localStorage.getItem('body_theme', theme.DARK)) {
        refs.body.classList.remove(theme.LIGHT)
        refs.body.classList.add(theme.DARK)
        localStorage.setItem('body_theme', theme.DARK)
        localStorage.setItem('check', false)
    }
};



