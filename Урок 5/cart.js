// Задание 2
// *Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, 
// сгенерированная на базе JS: Пустая корзина должна выводить строку «Корзина пуста»; Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

//Предполагается что данные по наполненности корзины поступают из какого то источника. Поэтому будем исходить из этого и напишем два варианта данных, для пустой корзины, и с вместимым

// var cart = { //Пустая корзина

// }

var cart = { //Корзина с каким то содержимым
    24352: {
        productName: "phone",
        price: 1562
    },
    23455: {
        productName: "jeans",
        price: 532
    },
    85232: {
        productName: "clock",
        price: 793
    }
}

if(Object.keys(cart).length == 0){
    var cartMessage = document.createElement("p");
    cartMessage.innerText = "Корзина пуста";
    document.getElementById("cart").appendChild(cartMessage)
} else{
    var cartMessage = document.createElement("p");
    cartMessage.innerText = "В корзине находится следующее колличество товаров: " + Object.keys(cart).length;
    document.getElementById("cart").appendChild(cartMessage);
    var cartPrice = 0;
    for(var value in cart){
        cartPrice += cart[value].price
    }
    cartMessage = document.createElement("p");
    cartMessage.innerText = "Их общая стоимость составляет: " + cartPrice + " у.е."
    document.getElementById("cart").appendChild(cartMessage);
}