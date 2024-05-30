function removeItem(item){
    
    let singleItemAmount = item.textContent;
    let totalItemAmount = document.getElementById('amountItems').textContent;
    
    singleItemAmount--;
    totalItemAmount--;

    

    if (singleItemAmount < 0){
        singleItemAmount = 0;
    }

    if (item.textContent <= 0) {
        return
    }

       
    document.getElementById(item.id).textContent = singleItemAmount;
    
    if (totalItemAmount < 0) {
        totalItemAmount = 0;
    }
    
    document.getElementById('amountItems').textContent = totalItemAmount;
    document.getElementById('Subtotal').textContent = totalPrice(item, 'remove');

        

}

function addItem(item){
    let singleItemAmount = item.textContent;
    let totalItemAmount = document.getElementById('amountItems').textContent;
    
    singleItemAmount++;
    totalItemAmount++;

    document.getElementById(item.id).textContent = singleItemAmount;
    document.getElementById('amountItems').textContent = totalItemAmount;
    document.getElementById('Subtotal').textContent = totalPrice(item, 'add');
}


function totalPrice(item, check){
    
    let value = 0;    
    let subtotal = parseInt(document.getElementById('Subtotal').textContent);


    switch (item.id){

        case 'laptop': 
            value = 499.99;
            break;

        case 'keyboard':
            value = 39.99
            break;

        case 'mouse':
            value = 25.99
            break;

        case 'gpu':
            value = 1999.99;
            break;
       
    }
  
    if (check == 'add'){
        subtotal += value;
    }

    if (check == 'remove'){
        subtotal -= value;
    }


    if (subtotal < 0.00){
        subtotal = 0.00;
    }

    return subtotal.toFixed(2);
}

function emptyCart(){

    document.getElementById('amountItems').textContent = 0;
    document.getElementById('Subtotal').textContent = 0.00;
    document.getElementById('laptop').textContent = 0;
    document.getElementById('keyboard').textContent = 0;
    document.getElementById('mouse').textContent = 0;
    document.getElementById('gpu').textContent = 0;

}
