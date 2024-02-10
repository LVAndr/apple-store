
import './basketBtn.css';
import basketImg from 'bundle-text:/src/assets/img/basket.svg'
import {router} from "../../main";

export function getBasketBtn(){
    const basketBtn = document.createElement('a');
    basketBtn.href = '/basket'
    basketBtn.classList.add('basket-btn');
    basketBtn.innerHTML = basketImg;
    basketBtn.addEventListener('click', function (event) {
        event.preventDefault();
        router.navigate('/basket');
    });

    return basketBtn
}