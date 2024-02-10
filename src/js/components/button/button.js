import './button.css'
export const buttonTypes = {
    primaryLarge: 'primary-large-btn',
    primary: 'primary-btn',
    link: 'link-btn'
}
const typeToClass = {
    [buttonTypes.primaryLarge]: 'btn__primary-large',
    [buttonTypes.primary]: 'btn__primary',
    [buttonTypes.link]: 'btn__link'
}
export function getButton(type, {text, href, listener}) {
    const btn = document.createElement('button');
    btn.classList.add('btn-reset', typeToClass[type])
    if(text)btn.textContent = text;
    if (href)btn.href = href;
    if (listener)btn.addEventListener('click', listener);

    return btn
}
//getButton(buttonTypes.primary, {href: '/'})