'use strict'

//This array will hold my Objects
// var imageArray = ['bag', 'banana', 'bathroom'];
var names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck'];
Products.allproduct = [];


function Products(fileP, name){
  this.fileP = fileP;
  this.name = name;
  Products.allproduct.push(this);
  Products.checkNum = [];
}



//generates two products
var generate = function(){
  for(var i = 0; i < names.length; i++){
    new Products('img/' + names[i] + '.jpg', names[i]);
  }
};

var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');

imgEl1.addEventListener('click', randNum);
imgEl2.addEventListener('click', randNum);
imgEl3.addEventListener('click', randNum);

//provides random index from my array

function randNum(e){
  var randArray = [];
  var leftNum = Math.floor(Math.random() * Products.allproduct.length);
  var centerNum = Math.floor(Math.random() * Products.allproduct.length);
  var rightNum = Math.floor(Math.random() * Products.allproduct.length);
  console.log(randArray);
  while(leftNum === centerNum || centerNum === rightNum || rightNum === leftNum || leftNum === randArray || centerNum === randArray || rightNum === randArray){
    leftNum = Math.floor(Math.random() * Products.allproduct.length);
    centerNum = Math.floor(Math.random() * Products.allproduct.length);
    rightNum = Math.floor(Math.random() * Products.allproduct.length);
    console.log('repeat');
    
  }
  randArray.push(leftNum,centerNum,rightNum);
  console.log(randArray);
  imgEl1.src = Products.allproduct[leftNum].fileP;
  imgEl2.src = Products.allproduct[centerNum].fileP;
  imgEl3.src = Products.allproduct[rightNum].fileP;
}


generate();
randNum();

