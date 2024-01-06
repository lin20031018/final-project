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
    } else window.alert("不得多於100");
}
var additemId = 0;
var totalAmount = 0;

function addTocart(item) {
    additemId += 1;

    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', 'cart-item-' + additemId);

    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc); //圖片

    var title = document.createElement('div');
    title.innerText = item.children[1].innerText; //商品名稱

    var degree = document.createElement('div'); //度數
    degree.innerText = item.querySelector('h4:nth-child(2)').innerText;

    var label = document.createElement('div'); 
    label.innerText = item.children[2].children[0].innerText;

    /*var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);*/

    var quantity = item.querySelector('.item_num').value;

    var quantityDiv = document.createElement('div');
    quantityDiv.innerText = '數量: ' + quantity;
    selectedItem.appendChild(quantityDiv);

    // Assuming that each item has a unique price class
    var priceOptions = {
        'item1': 'price1',
        'item2': 'price2',
        'item3': 'price3',
        // 增加商品這裡需增加
      };
      
    var priceClass = priceOptions[item.id] || 'defaultPrice';
    var priceElement = document.querySelector('.' + priceClass);

    if (priceElement) {
        var price = parseFloat(priceElement.innerText);

        var totalPrice = quantity * price;

        totalAmount += totalPrice; // Update the total amount

        var totalPriceDiv = document.createElement('div');
        totalPriceDiv.innerText = '共: $' + totalPrice.toFixed(2);

        var delbtn = document.createElement('button');
        delbtn.innerText = '移除';
        delbtn.onclick = function () {
            totalAmount -= totalPrice; // Deduct the removed item's price from total
            selectedItem.remove();
            updateTotalPrice(); // Update the displayed total amount
        };

        var cartItems = document.getElementById('title');
        selectedItem.append(img);
        selectedItem.append(title);
        selectedItem.append(label);
        selectedItem.append(degree);
        selectedItem.append(totalPriceDiv); // 清單中各商品的總價
        selectedItem.append(delbtn);
        cartItems.append(selectedItem);

        updateTotalPrice(); // 顯示出來的總價
    } else {
        console.error('Price element not found for ' + item.id);
    }
}

function updateTotalPrice() {
    var totalAmountElement = document.getElementById('total-amount');
    if (totalAmountElement) {
        totalAmountElement.innerText = '總金額: $' + totalAmount.toFixed(2);
    }
}

function showCheckoutModal() {
    var modal = document.getElementById('checkoutModal');
    modal.style.display = 'block';

    // Display selected items in the modal
    displaySelectedItems();
}


//顯示選取框框
function displaySelectedItems() {
    var selectedItemsContainer = document.getElementById('selectedItemsContainer');
    selectedItemsContainer.innerHTML = ''; // Clear previous content

    var cartItems = document.getElementById('title').children;

    for (var i = 0; i < cartItems.length; i++) {
        var selectedItem = cartItems[i].cloneNode(true); // Clone the cart item

        // Remove the "移除" button from the cloned item
        var removeButton = selectedItem.querySelector('button');
        if (removeButton) {
            removeButton.remove();
        }

        selectedItemsContainer.appendChild(selectedItem);
    }
}



// Close the checkout modal
function closeCheckoutModal() {
    var modal = document.getElementById('checkoutModal');
    modal.style.display = 'none';
}

//送出後的
function checkout() {
    var selectedItems = document.getElementById('title').querySelectorAll('.cartImg');
    var totalPrice = 0;

    var modalContent = document.getElementById('selected-items');
    modalContent.innerHTML = '';

    selectedItems.forEach(function (item) {
        var cloneItem = item.cloneNode(true);
        var price = parseFloat(item.querySelector('.totalPrice').innerText.slice(12));
        totalPrice += price;
        modalContent.appendChild(cloneItem);
    });

    var totalDiv = document.getElementById('total-price');
    totalDiv.innerText = 'Total Price: $' + totalPrice.toFixed(2);

    var modal = document.getElementById('checkoutModal');
    modal.style.display = 'block';
}