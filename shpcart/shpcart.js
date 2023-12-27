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
    var price = Number
}