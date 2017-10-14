'use strict';
console.log('Top of script.');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// get the reference for the body
var body = document.getElementsByTagName('body')[0];

// creates a <table> element and a <tbody> element
var tbl = document.createElement('table');
var tblBody = document.createElement('tbody');

function Store (name, minCustPerHour, maxCustPerHour, avgCookeSoldPerHour, calcRandCustByHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookeSoldPerHour = avgCookeSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  this.calcRandCustByHour = function() {
    for(var i = 0; i < hours.length; i++){
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(hours.length + ' ' + i + ' ' + this.randCustByHour[i]);
    }
  };
  this.calcCookiesSoldByHour = function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.floor((Math.random() * this.avgCookeSoldPerHour * this.randCustByHour[j])));
      console.log('j, this.randCustByHour, this.cookiesSoldByHour: ' + j + ' ' + this.randCustByHour[j] + ' ' + this.cookiesSoldByHour[j]);
    }
  };
  this.render = function() {
    var tblBody = document.getElementById('t');
    console.log('tblBody ', tblBody);
    var row = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    row.appendChild(tdEl);
    console.log('Appended left header, about to enter calcCookiesSoldByHour');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    for(var k = 0; k < hours.length; k++){
      var salesTd = document.createElement('td');
      salesTd.textContent = this.cookiesSoldByHour[k];
      row.appendChild(salesTd);
    }
    console.log('this is the table', tblBody);
    console.log('this is row', row);
    tblBody.appendChild(row);
  };
};
var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
firstAndPike.render();

var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.render();

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.render();

var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
capitolHill.render();

var alKi = new Store('Alki', 2, 16, 4.6);
alKi.render();