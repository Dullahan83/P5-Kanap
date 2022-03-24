
for(let item of getCart()){
    fetch("http://localhost:3000/api/products" + "/" + item.id)
    .then(data => data.json())
    .then(product =>{
        document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id="${item.id}" data-color="${item.color}">
                                                            <div class="cart__item__img">
                                                                <img src="${product.imageUrl}" alt="${product.altTxt}">
                                                            </div>
                                                            <div class="cart__item__content">
                                                                <div class="cart__item__content__description">
                                                                    <h2>${product.name}</h2>
                                                                    <p>${item.color}</p>
                                                                    <p>${product.price} €</p>
                                                                </div>
                                                                <div class="cart__item__content__settings">
                                                                    <div class="cart__item__content__settings__quantity">
                                                                    <p>Qté : </p>
                                                                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
                                                                    </div>
                                                                    <div class="cart__item__content__settings__delete">
                                                                    <p class="deleteItem">Supprimer</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>`
                                                        getDeleteBtnList();
                                                        getQuantityBtnList();
                                                        getTotalCartItems();
                                                        getTotalCartPrice();
                                                        
    })
}