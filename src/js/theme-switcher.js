const STORAGE_KEY = 'theme';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('.theme-switch__toggle'),
};

themeChecker();

refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(e) {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);

  const checked = e.target.checked;
  checked ? localStorage.setItem(STORAGE_KEY, Theme.DARK) : localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
}

function themeChecker() {
  const theme = localStorage.getItem(STORAGE_KEY);

  if (theme === 'dark-theme') {
    refs.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
}
