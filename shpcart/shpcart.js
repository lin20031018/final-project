function minus(num){
    var number = Number(document.getElementsByClassName("item_num")[num].value);
    if(number > 1){
        number -= 1;
        document.getElementsByClassName("item_num")[num].value = number;
    } else window.alert("不得少於1")
}

function add(num){
    var number = Number(document.getElementsByClassName("item_num")[num].value);
    if(number < 100){
        number += 1;
        document.getElementsByClassName("item_num")[num].value = number;
    } else window.alert("不得多於100")
}

function prc(){
    var prc = Number(document.getElementsByClassName(""))
}

var additemId = 0;
function addTocart(item) {
    additemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', additemId);

    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);

    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;

    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;

    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);

    //000
    var quantity = item.querySelector('.item_num').value;

    // Create a new div for the quantity and append it to the selectedItem
    var quantityDiv = document.createElement('div');
    quantityDiv.innerText = '數量: ' + quantity;
    selectedItem.appendChild(quantityDiv);

    var priceClass = item.id === 'item1' ? 'price1' : 'price2';
    var price = parseFloat(document.querySelector('.' + priceClass).innerText);

    var totalPrice = quantity * price;

    var totalPriceDiv = document.createElement('div');
    totalPriceDiv.innerText = 'Total Price: $' + totalPrice.toFixed(2);

    //000

    var delbtn = document.createElement('button');
    delbtn.innerText = '移除';
    delbtn.onclick = function(){
    selectedItem.remove();
    }
    var cartItems = document.getElementById('title'); /* 顯示抓取到的部件*/
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delbtn);
    cartItems.append(selectedItem);

}