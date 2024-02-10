import './productStorage.css';

export function getProductStorage() {
    const storageContainer = document.createElement('div');
    storageContainer.classList.add('product__storage-container');

    // const colorTitle = getMainTitle('Пам'ять', 'h4');
    // colorTitle.classList.add('product__storage-title');

    const storageWrapper = document.createElement('div');
    storageWrapper.classList.add('product__storage-sizes');

    const storageSize = document.createElement('a');
    storageSize.classList.add('product__storage-size')
    storageSize.textContent = `128 Гб`

    const storageSize2 = document.createElement('a');
    storageSize2.classList.add('product__storage-size')
    storageSize2.textContent = `256 Гб`

    storageWrapper.append(storageSize, storageSize2);
    storageContainer.append( storageWrapper)

    return storageContainer
}