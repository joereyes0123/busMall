'use strict'

//This array will hold my Objects
var imageArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg'];
var names = ['bag', 'banana','bathroom'];
Products.allproduct = [];


function Products(fileP, name){
  this.fileP = fileP;
  this.name = name;
  Products.allproduct.push(this);
}



//generates two products
var generate = function(){
  for(var i = 0; i < imageArray.length; i++){
    new Products(imageArray[i], names[i]);
  }
};

var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');

imgEl1.addEventListener('click', randProduct);
imgEl2.addEventListener('click', randProduct);
imgEl3.addEventListener('click', randProduct);

//provides random index from my array

function randProduct(e){
  imgEl1.src = Products.allproduct[Math.floor(Math.random() * Products.allproduct.length)].fileP;
  imgEl2.src = Products.allproduct[Math.floor(Math.random() * Products.allproduct.length)].fileP;
  imgEl3.src = Products.allproduct[Math.floor(Math.random() * Products.allproduct.length)].fileP;
  console.log(e);
}

generate();
randProduct();

