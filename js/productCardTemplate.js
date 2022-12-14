let productData;
let total;
let cart = [];

endpointUrl = "http://localhost:8080/get/stockItemList"

async function productCardGenerator(){
    total = 0;
    let response = await fetch(this.endpointUrl);
    productData = await response.json();
    productData.sort(function(a,b){return a.id - b.id;})

    for (const productDataIndex in productData){
        let productTemplate = document.querySelector('#productCardTemplate');
       
        let productClone = productTemplate.content.cloneNode(true);
        let imageRoot = productClone.querySelector("img");
        let nameRoot = productClone.querySelector(".productName");
        let priceRoot = productClone.querySelector(".price");
        let descriptionRoot = productClone.querySelector(".productDescription")
        let stockRoot = productClone.querySelector(".inStock")
        let buttonRoot = productClone.querySelector("button");
        imageRoot.setAttribute("src", productData[productDataIndex].product.imageLink);
        nameRoot.textContent = productData[productDataIndex].product.name;
        priceRoot.textContent = productData[productDataIndex].product.price;
        descriptionRoot.textContent = productData[productDataIndex].product.description;

        if (productData[productDataIndex].amount <= 0){
        stockRoot.textContent = "Not in stock"
        stockRoot.setAttribute("class", "outOfStock")
        } else if (productData[productDataIndex].amount <= 5) {
        stockRoot.textContent = "Low stock"
        stockRoot.setAttribute("class", "lowStock")
        } else {
        stockRoot.textContent = "In stock"
        }

        buttonRoot.setAttribute("id", productData[productDataIndex].product.id)
        let target = document.querySelector('#productContainer');
        target.appendChild(productClone);
    }
}

function addToCart(buttonID){

    cart.push(buttonID.id)
    console.log(cart)
    // Total sum
    total = total + productData[buttonID.id -1].product.price;
    let lineItemSumRoot = document.getElementById('lineItemSum');
    let totalTwoDecimals = parseFloat(total).toFixed(2);
    lineItemSumRoot.textContent = totalTwoDecimals;

    //Select template and clone
    let lineItemTemplate = document.querySelector('#itemListTemplate');
    let lineItemClone = lineItemTemplate.content.cloneNode(true);

    //Select items in clone
    let lineItemNameRoot = lineItemClone.querySelector(".lineItemName");
    let lineItemPriceRoot = lineItemClone.querySelector(".lineItemPrice");
    let buttonRoot = lineItemClone.querySelector("button");
    let lineItemRoot = lineItemClone.querySelector(".lineItem")

    //Set attributes for clone
    buttonRoot.setAttribute("id", buttonID.id)
    lineItemNameRoot.textContent = productData[buttonID.id -1].product.name
    lineItemPriceRoot.textContent = productData[buttonID.id -1].product.price
    lineItemRoot.setAttribute("id", "lineItemID" + buttonID.id)

    //Check for multiple occurences and add amount if
    let lineItem = document.getElementsByClassName("lineItemName");
    let check = 0;
    if (lineItem.length > 0){
    for (let index = 0; index < lineItem.length; index++) {
        if (lineItem[index].textContent == productData[buttonID.id -1].product.name){
            let number = document.getElementsByClassName("lineItemNumber")
            let number2 = parseInt(number[index].textContent);
            number2 = number2 + 1;
            number[index].textContent = number2;
            check = 1;
        }    
    }   
}
    else {
        let target = document.querySelector('#lineItemTarget');
        target.append(lineItemClone);
    }
    if (check == 0){
        let target = document.querySelector('#lineItemTarget');
        target.append(lineItemClone);
    }
}



function removeItem(buttonID){

        let testcart = cart.filter(function(x){
            return x !== buttonID.id;
        })
        cart = testcart;
    



    let realID = "lineItemID" + buttonID.id
    let divToDelete= document.getElementById(realID);
    let divWithNumber = divToDelete.getElementsByClassName("lineItemNumber");
    let amount = divWithNumber[0].textContent;
    divToDelete.remove();
    let price = productData[buttonID.id -1].product.price;
    let finalPrice = price * amount
    total = total - finalPrice;
    let lineItemSumRoot = document.getElementById('lineItemSum');
    let totalTwoDecimals = parseFloat(total).toFixed(2);
    lineItemSumRoot.textContent = totalTwoDecimals;
}

function finalizeOrder(){
    
}