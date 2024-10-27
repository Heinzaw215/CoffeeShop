document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu');
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        
        const itemName = document.createElement('h2');
        itemName.textContent = `${item.name} (${item.type})`;
        
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        
        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = item.price;
        
        if (!item['in-stock']) {
            const outOfStock = document.createElement('p');
            outOfStock.classList.add('out-of-stock');
            outOfStock.textContent = 'Out of stock';
            menuItem.appendChild(outOfStock);
        }
        
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
        
        menuContainer.appendChild(menuItem);
    });
});
