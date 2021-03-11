// Задание 3
// *Сделать так, чтобы товары в каталоге выводились при помощи JS: Создать массив товаров (сущность Product); При загрузке страницы на базе данного массива 
// генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS

var product = [
    {
        name: "jeans",
        price: 13234,
        img: "https://picsum.photos/200"
    },
    {
        name: "patrik",
        price: 3513,
        img: "https://picsum.photos/200/300?grayscale"
    },
    {
        name: "phone",
        price: 3242,
        img: "https://picsum.photos/seed/picsum/200/300"
    }
]

for(i=0; i<product.length; i++) {
    var div = document.createElement("div");
    div.className = "catalogProduct";
    div.innerHTML = "<h2>"+product[i].name+"</h2><p>Цена товара: "+product[i].price+'</p><img src="'+product[i].img+'" alt="catalogimage">'
    document.getElementById("catalog").appendChild(div);
}

//Цикл выведет все товары из масива по шаблону на страницу. ТЗ довольно неясные, поэтому сделал как понял