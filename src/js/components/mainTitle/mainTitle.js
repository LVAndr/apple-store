import './mainTitle.css'
/*Заголовки*/
export function getMainTitle(text, h='h1'){
    const title = document.createElement(h);
    title.classList.add('categories-title');
    title.textContent = text;
    return title;
}