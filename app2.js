'use strict';

//constructors! think of it like a specaialized machine in a facotry that creates new objects
//prototypes are the functionaltiy that the machine adds to the ojbects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//we need to create a place for our list of all locations to be placed when we create them
var allLocaitons = [];

//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;

var netTotal = 0;

//constructor functions begin with an Uppercase letter

function MakeLocaation(name, minCustPerHour, maxCustPerHour, avgCookeSoldPerHour) {
  //a function called MakeLocaation will be a template for creating new objects that represent other locations
  //the statements in thsi funciton add properties and ore methods to the objects
  //the this keyword is used instead of the object name to indicate that the property or method belongs to the jobject that this function creates
  // this function has four parameters and each one sets the value of a property in the object
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookeSoldPerHour = avgCookeSoldPerHour;
  //why is this an array? Dynamic!
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocaitons.push(this);
  //using the this keyword in front of the method to show that the method belongs to the object that this function creates
  this.calcRandCustByHour = function() {
    //METHODS GO HERE
    //THINK ABOUT prototypes
  };
}
//remember to call the methods in the constructor that are now prototypes available to the new objects the constructor will MakeLocaation
// this.calcRandCustByHour();

//call the functions in a function if you want
//this constructor function creates five new objects with their own unique values used in properties of this object(name, minCustPerHour, maxCustPerHour, avgCookeSoldPerHour)
function makeStands(){
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  //make one for each store
};
makeStands();

//time to create the taple in javascript
//make header row
//table needs and id in html

function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
}

//consider a for loop for the hours
//create a th element
//give the th elements some text contest like hours[i];
//appendChild

//create a th element
//give it text content 'Daily Location Totals'
//appendChild

//remember to call makeHeaderRow();
