function displayData() {
    // 從資料儲存位置檢索資料
    const storedData = JSON.parse(localStorage.getItem('memberData')) || {};

    // 在表單中呈現資料
    document.getElementById('id').value = storedData.id || '';
    document.querySelector(`input[name="gender"][value="${storedData.gender || ''}"]`).checked = true;
    document.getElementById('birth').value = storedData.birth || '';
    document.getElementById('lefteye').value = storedData.lefteye || '';
    document.getElementById('righteye').value = storedData.righteye || '';
    document.getElementById('address').value = storedData.address || '';
}

function updateData() {
    //取得資料
    const formData = {
        id: document.getElementById('id').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        birth: document.getElementById('birth').value,
        lefteye: document.getElementById('lefteye').value,
        righteye: document.getElementById('righteye').value,
        address: document.getElementById('address').value,
    };

    
    localStorage.setItem('memberData', JSON.stringify(formData)); //改成儲存在後端資料庫

    alert('資料已更新！');
}

const shoppingData = {    // 後端返回的購物紀錄資料
    items: [
        { title: '商品1', price: 100 },
        { title: '商品2', price: 150 },
        { title: '商品3', price: 200 },
    ],
};

// 顯示購物清單
function displayShoppingList(data) {
    const shoppingListContainer = document.getElementById('shoppingList');

    if (data && data.items && data.items.length > 0) {
        //創建清單
        const ol = document.createElement('ol');

        data.items.forEach(item => {
            const li = document.createElement('li');
            li.innerText = `${item.title}: $${item.price}`;
            ol.appendChild(li);
        });

        // 將清單添加到容器中
        shoppingListContainer.appendChild(ol);
    } else {
        shoppingListContainer.innerText = '購物清單為空。';
    }
}

function displaytextarea() {
    const storedText = JSON.parse(localStorage.getItem('TextData')) || {};
    document.getElementsByTagName('textarea')[0].value = storedText.textarea || '';
}

function updatetextarea() {
    const textData = {
        textarea: document.getElementsByTagName('textarea')[0].value,
    };

    
    localStorage.setItem('TextData', JSON.stringify(textData)); //改成儲存在後端資料庫

    alert('記錄成功');

}