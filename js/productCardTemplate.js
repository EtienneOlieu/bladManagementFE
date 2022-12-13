let productData;
endpointUrl = "http://localhost:8080/get/stockItemList"

async function productCardGenerator(){
    let response = await fetch(this.endpointUrl);
    productData = await response.json();
    
    console.log(productData);

    for (const productDataIndex in productData){
        let productTemplate = document.querySelector('#productCardTemplate');
        console.log(productTemplate)
        let productClone = productTemplate.content.cloneNode(true);
        let imageRoot = productClone.querySelector("img");
        let nameRoot = productClone.querySelector(".productName");
        let priceRoot = productClone.querySelector(".price");
        let descriptionRoot = productClone.querySelector(".productDescription")
        let stockRoot = productClone.querySelector(".inStock")
        let buttonRoot = productClone.querySelector("button");
        
        
      


    }
}