'use strict';

//This array will hold my Object names
var namesA = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var totalClick = [];
Products.looped = 0;
Products.allproduct = [];


//Constructor for all my Objects
function Products(fileP, name){
  this.fileP = fileP;
  this.alt = name;
  // this.name = name;
  this.displayed = 0;
  this.clicked = 0;
  Products.allproduct.push(this);
}



//Generates all Objects via Products cunstructor by calling the "names" array
var generate = function(){
  for(var i = 0; i < namesA.length; i++){
    new Products('img/' + namesA[i] + '.jpg', namesA[i]);
  }
};


//Here we call the DOM for Imgage IDs
var imgEl1 = document.getElementById('image1');
var imgEl2 = document.getElementById('image2');
var imgEl3 = document.getElementById('image3');


imgEl1.addEventListener('click', clickedT);
imgEl2.addEventListener('click', clickedT);
imgEl3.addEventListener('click', clickedT);

//randNum will complete three steps. 1-create a random number. 2-compare random number to conditions thus not allowing repetition. 3-If rand number are not repeated then rand will be assigned to attribute "src" allowing image to be displayed.
function randNum(){
  var randArray = [];
  var leftNum = Math.floor(Math.random() * Products.allproduct.length);
  var centerNum = Math.floor(Math.random() * Products.allproduct.length);
  var rightNum = Math.floor(Math.random() * Products.allproduct.length);
  console.log(randArray);
  while(leftNum === centerNum || centerNum === rightNum || rightNum === leftNum || randArray.includes(leftNum) || randArray.includes(centerNum) || randArray.includes(rightNum)){
    leftNum = Math.floor(Math.random() * Products.allproduct.length);
    centerNum = Math.floor(Math.random() * Products.allproduct.length);
    rightNum = Math.floor(Math.random() * Products.allproduct.length);
    // console.log('repeat');
  }if(Products.looped < 26){
    randArray.push(leftNum,centerNum,rightNum);
    console.log(randArray);

    //Displays image using rand number, assigns the "alt" property to each object and counts times image was displayed.
    imgEl1.src = Products.allproduct[leftNum].fileP;
    imgEl1.alt = Products.allproduct[leftNum].alt;
    Products.allproduct[leftNum].displayed++;


    imgEl2.src = Products.allproduct[centerNum].fileP;
    imgEl2.alt = Products.allproduct[centerNum].alt;
    Products.allproduct[centerNum].displayed++;


    imgEl3.src = Products.allproduct[rightNum].fileP;
    imgEl3.alt = Products.allproduct[rightNum].alt;
    Products.allproduct[rightNum].displayed++;
    Products.looped++;
  }else{
    exiTally();
  }
}

function clickedT(event){
  randNum();
  for(var i = 0; i < Products.allproduct.length; i++)
    if(event.target.alt === Products.allproduct[i].alt) {
      Products.allproduct[i].clicked++;
    }
}


var exiTally = function(){
  for(var i = 0; i < namesA.length; i++){
    totalClick.push(Products.allproduct[i].clicked);
  }
  imgEl1.removeEventListener('click', clickedT);
  renderChart();
};

function renderChart(){
  var context = document.getElementById('chart').getContext('2d');
  var chartColors = ['#E37222'];
  var totalChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: namesA,
      datasets: [{
        label: 'Total Votes',
        data: totalClick,
        backgroundColors: chartColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}






//FOR loop will add a limit to number of times we can interact with page
generate();
randNum();