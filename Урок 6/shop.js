document.addEventListener('DOMContentLoaded', () =>{
    var product = [
        {
            productName: "phone",
            price: 1562,
            img: "https://picsum.photos/200",
            article: 85232
        },
        {
            productName: "jeans",
            price: 532,
            img: "https://picsum.photos/200/300?grayscale",
            article: 23455
        },
        {
            productName: "patrik",
            price: 793,
            img: "https://picsum.photos/seed/picsum/200/300",
            article: 24352
        }
    ]
    var shoppingCart = { //Корзина с каким то содержимым
         
    }

    function deleteAll(){
        var props = Object.getOwnPropertyNames(shoppingCart)
        for (var i = 0; i<props.length; i++){
            delete shoppingCart[props[i]];
        }
        document.getElementById("cart").innerHTML=""
        curentCart();
    }

    function buttonClick(event){
        var id = event.target.getAttribute('article');
        var addObjectInCart = product.filter(function(val){
            return val.article == id;
        })
        if (!shoppingCart.hasOwnProperty(id)){
            shoppingCart[id] = addObjectInCart[0];
            shoppingCart[id].amount = 1;
        } else {
            shoppingCart[id].amount++;
        }
        curentCart();
    }


    for(i=0; i<product.length; i++) {
        var div = document.createElement("div");
        div.className = "catalogProduct";
        div.innerHTML = '<img src="'+product[i].img+'" alt="catalogimage">'+"<h2>"+product[i].productName+"</h2><p>Цена товара: "+product[i].price+'</p>';
        var button = document.createElement("button");
        button.className = "buy";
        button.innerText = "Купить";
        button.setAttribute('article',product[i].article)
        button.addEventListener('click',buttonClick)
        div.appendChild(button);
        document.getElementById("catalog").appendChild(div);
    }

    function minusclick(event){
        var id = event.target.getAttribute('article');
        shoppingCart[id].amount = shoppingCart[id].amount-1
        if (shoppingCart[id].amount==0){
            delete shoppingCart[id];
        }
        curentCart();
    }
    function plusclick(event){
        var id = event.target.getAttribute('article');
        shoppingCart[id].amount = shoppingCart[id].amount+1
        curentCart();
    }
   
    

    function curentCart(){
        document.getElementById("cart").innerHTML=""
        var cartMessage = document.createElement("p");
        if(Object.keys(shoppingCart).length == 0){
            cartMessage.innerText = "Корзина пуста";
            document.getElementById("cart").appendChild(cartMessage);
        } else{
            var cartPrice = 0;
            for(var key in shoppingCart){
                cartPrice += (shoppingCart[key].price * shoppingCart[key].amount);
            }
            cartMessage.innerText = "Общая стоимость корзины: "+cartPrice;
            document.getElementById("cart").appendChild(cartMessage);
            for(var key in shoppingCart){
                cartMessage = document.createElement("p");
                cartMessage.innerText = "Наименование: "+shoppingCart[key].productName+"; колличество: "+shoppingCart[key].amount+"; Общая стоимость: "+(shoppingCart[key].amount*shoppingCart[key].price);
                var minusButton = document.createElement("button");
                minusButton.classList.add('minus');
                minusButton.innerText = "-"; 
                minusButton.setAttribute('article',shoppingCart[key].article)
                minusButton.addEventListener('click',minusclick)
                cartMessage.appendChild(minusButton)
                var plusButton = document.createElement("button");
                plusButton.classList.add('plus');
                plusButton.innerText = "+";
                plusButton.setAttribute('article',shoppingCart[key].article)
                plusButton.addEventListener('click',plusclick)
                cartMessage.appendChild(plusButton)
                document.getElementById("cart").appendChild(cartMessage);
            }
            var deleteAllButton = document.createElement("button")
            deleteAllButton.id = "deleteAllButton";
            deleteAllButton.innerText = "Очистить корзину"
            deleteAllButton.addEventListener('click',deleteAll)
            document.getElementById("cart").appendChild(deleteAllButton);




            
            
         }
    }
    curentCart();
})