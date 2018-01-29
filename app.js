'use strict';

//Declearing multiple variables to construct object names of the images.
var namesA = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

var itemList = document.getElementById('itemList');
//accessing the form itself from the HTML
var storeForm = document.getElementById('Buy');

//prices of the items
var allPrice = [29,49,9,7,6,9,9,9,23,7,9,8,9,34,9,9,9,23,24,4];
//array to hold all of the instances of the object below
Products.allproduct = [];
//constructor to hold all of the information of the prodcuts.
function Products(fileP, name){
  this.fileP = fileP;
  this.alt = name;
  this.price = 0;
  this.quantity1 = 0;
  Products.allproduct.push(this);
}
//takes image ID and creates all the objects 
function generate(){
  for(var i = 0; i < namesA.length; i++){
    new Products('img/' + namesA[i] + '.jpg', namesA[i]);
  }
  //creating the text element and appending to the DOM
  for(var i = 0; i < namesA.length; i++){
    var optionList = document.createElement('option');
    optionList.textContent = namesA[i];
    itemList.appendChild(optionList);
  }
}

//takes items and stores them into local storage
// function localStorage(){

//adds event to the cart
function addToCart(event){
  event.preventDefault(); //keeps the browser from removing the data on refresh.
  console.log(event);
  var product = event.target.product.value; //passes in the value of the event.
  var quantity = event.target.quantity.valueAsNumber;
 
  //checking the value of the variables above, if it matches it'll run through the array and log the quantity.
  for(var i = 0; i < Products.allproduct.length; i++){
    if(product === Products.allproduct[i].alt){
      Products.allproduct[i].quantity1 += quantity;
    }
  }
  var currentCart = JSON.stringify(Products.allproduct);
  localStorage.setItem('shopCart',currentCart);
  storeForm.reset();
}

//take input of value and store in local storage.

//create a button that goes to cart.

//pull the data from the local storage and create a table.
var table = document.getElementById('cart');

function viewCart() {
  var currentCart = JSON.parse(localStorage.shopCart);
  
  for(var i = 0; i < currentCart.length; i++) {
    var rowEl = document.createElement('tr');
    var dataEl = document.createElement('td');
    dataEl.textContent = currentCart[i].quantity1;
    rowEl.appendChild(dataEl);

    dataEl = document.createElement('td');
    dataEl.textContent = currentCart[i].alt;
    rowEl.appendChild(dataEl);

    dataEl = document.createElement('td');
    dataEl.textContent = currentCart[i].price;
    rowEl.appendChild(dataEl);

    dataEl = document.createElement('td');
    var image = document.createElement('img');
    image.src = currentCart[i].fileP;
    rowEl.appendChild(dataEl);
    dataEl.appendChild(image);
    table.appendChild(rowEl);
  }  

}

// on click it's adding to the cart
if(storeForm){
  storeForm.addEventListener('submit', addToCart);
  generate();
} else {
  viewCart();
}