import ass from '/src/assets/img/iphone15pro.png';

export default class ProductService {
    static async getProducts() {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return [
            {
                category: 'Iphone',
                variations: [
                    {
                        title: 'Iphone 15 Red',
                        images: [ass],
                        color: {color: '#a20505', title: 'red'},
                        memory: 128,
                        price: 33000
                    },
                    {
                        title: 'Iphone 15 Silver',
                        images: [ass],
                        color: {color: '#eee', title: 'silver'},
                        memory: 128,
                        price: 33000
                    },

                ]
            }
        ]
    }
}