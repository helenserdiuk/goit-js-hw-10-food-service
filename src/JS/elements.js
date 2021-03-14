import menuGallery from './menu.json';
import templateMenu from '../templates/menu.hbs';

const menuList = document.querySelector('.menu');
const menuItem = templateMenu(menuGallery);
const toggleTheme = document.querySelector('#theme-switch-toggle');
const themeSwitchControl = document.querySelector('.theme-switch__control')
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

menuList.innerHTML = menuItem;

toggleTheme.addEventListener('change', choiceThemesDark);

function choiceThemesDark (event) {
    if (event.currentTarget.checked) { 
        // event.currentTarget - элемент, на котором сработал обработчик
        // checked - хранит состояние чекбокса или радиокнопки.
        document.body.classList.add(Theme.DARK);
        //classList.add(Theme.DARK) - добавляет класс Theme.DARK в список классов элемента
        document.body.classList.remove(Theme.LIGHT);
        //classList.remove(Theme.LIGHT) - удаляет класс Theme.LIGHT из списка классов элемента
        window.localStorage.setItem('Theme', Theme.DARK);
    }else{
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
    }
}

