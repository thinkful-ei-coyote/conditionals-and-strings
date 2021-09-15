/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/
let productNames = [];
   function addItem(product){
     //return product.name;
     productNames.push(product.name);
   }

function listAllItems(products) {

  
  //What the map function is really doing
  

  for(let product of products){
    addItem(product);
  }

  let productNames = products.map(function(product){
    return product.name;
  })
  switch (productNames.length) {
    case 0:
      return "There are no items for sale.";
    case 1:
      return `There is 1 item for sale: ${productNames[0]}.`;
    case 2:
      return `There are 2 items for sale: ${productNames[0]} and ${productNames[1]}.`;
    default:
      return `There are ${productNames.length} items for sale: ${productNames.join(", ")}.`;
  }
}

module.exports = {
  listAllItems,
};
