import './productColors.css'
import {getMainTitle} from "../mainTitle/mainTitle";
import {getNavigationLink} from "../navigationLink/navigationLink";

export function getProductColor() {
    const colorContainer = document.createElement('div');
    colorContainer.classList.add('product__color-container');

    // const colorTitle = getMainTitle('Колір товара', 'h4');
    // colorTitle.classList.add('product__colors-title');

    const colorsWrapper = document.createElement('div');
    colorsWrapper.classList.add('product__colors');


    const colors = [
        {color: '#a20505', title: 'red'},
        {color: '#00700d', title: 'green'},
        {color: '#04618a', title: 'blue'},
        {color: '#777575', title: 'blue'},
        {color: '#cebb96', title: 'blue'},
    ]
    const colorsRadios = [];
    for (const oneColor of colors){
        const colorContainer = document.createElement('a');
        colorContainer.href = `color=${oneColor.title}`
        colorContainer.classList.add('color');
        colorsRadios.push(colorContainer);
        colorContainer.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            colorsRadios.forEach(i => {
                i === colorContainer ? i.classList.add('active'): i.classList.remove('active');
            })

        })
        colorContainer.style.backgroundColor = oneColor.color;
        colorsWrapper.append(colorContainer)
    }


    colorContainer.append( colorsWrapper)

    return colorContainer
}