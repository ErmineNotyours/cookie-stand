'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//First and Pike Location
var firstAndPike = {
  //creating my key value pairs inside of my object they are called properties
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookeSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hours
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++){
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(hours.length + ' ' + i + ' ' + this.randCustByHour[i]); //This is the only console.log that executes
    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookeSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function(){
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!
    //create a variable to be able to append an item in our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give test to the new h3 elment
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log('liEl = ' + liEl);
      firstandpike.appendChild(liEl);
      this.totalCookies = this.totalCookies + this.cookiesSoldByHour[k];
    }
    //Total cookies per day here
    var liEl = document.createElement('li');
    //creating li elements with text of the hours
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log('liEl = ' + liEl);
    firstandpike.appendChild(liEl);
  }
};
firstAndPike.render();

//SeaTac Airport	3	24	1.2
var seaTac = {
  //creating my key value pairs inside of my object they are called properties
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookeSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hours
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++){
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(hours.length + ' ' + i + ' ' + this.randCustByHour[i]); //This is the only console.log that executes
    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookeSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function(){
    var seatac = document.getElementById('seatac');
    var st = document.getElementById('st');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!
    //create a variable to be able to append an item in our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give test to the new h3 eelment
    h3El.textContent = this.name;
    st.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log('liEl = ' + liEl);
      seatac.appendChild(liEl);
      this.totalCookies = this.totalCookies + this.cookiesSoldByHour[k];
    }
    //Total cookies per day here
    var liEl = document.createElement('li');
    //creating li elements with text of the hours
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log('liEl = ' + liEl);
    seatac.appendChild(liEl);
  }
};
seaTac.render();

//Seattle Center	11	38	3.7
var seattleCenter = {
  //creating my key value pairs inside of my object they are called properties
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookeSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hours
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++){
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(hours.length + ' ' + i + ' ' + this.randCustByHour[i]); //This is the only console.log that executes
    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookeSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function(){
    var seattlecenter = document.getElementById('seattlecenter');
    var sc = document.getElementById('sc');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!
    //create a variable to be able to append an item in our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give test to the new h3 eelment
    h3El.textContent = this.name;
    sc.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log('liEl = ' + liEl);
      seattlecenter.appendChild(liEl);
      this.totalCookies = this.totalCookies + this.cookiesSoldByHour[k];
    }
    //Total cookies per day here
    var liEl = document.createElement('li');
    //creating li elements with text of the hours
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log('liEl = ' + liEl);
    seattlecenter.appendChild(liEl);
  }
};
seattleCenter.render();

//Capitol Hill	20	38	2.3
var capitolHill = {
  //creating my key value pairs inside of my object they are called properties
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookeSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hours
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++){
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(hours.length + ' ' + i + ' ' + this.randCustByHour[i]); //This is the only console.log that executes
    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookeSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function(){
    var capitolhill = document.getElementById('capitolhill');
    var ch = document.getElementById('ch');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!
    //create a variable to be able to append an item in our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give test to the new h3 eelment
    h3El.textContent = this.name;
    ch.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log('liEl = ' + liEl);
      capitolhill.appendChild(liEl);
      this.totalCookies = this.totalCookies + this.cookiesSoldByHour[k];
    }
    //Total cookies per day here
    var liEl = document.createElement('li');
    //creating li elements with text of the hours
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log('liEl = ' + liEl);
    capitolhill.appendChild(liEl);
  }
};
capitolHill.render();
//Alki	2	16	4.6
var alKi = {
  //creating my key value pairs inside of my object they are called properties
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookeSoldPerHour: 4.6,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hours
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++){
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(hours.length + ' ' + i + ' ' + this.randCustByHour[i]); //This is the only console.log that executes
    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookeSoldPerHour * this.randCustByHour[j]));
      console.log('i, this.avgCookeSoldPerHour, this.cookiesSoldByHour[j]', j, this.avgCookeSoldPerHour, this.cookiesSoldByHour[j]);
    }
  },
  render: function(){
    var alki = document.getElementById('alki');
    var ak = document.getElementById('ak');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!
    //create a variable to be able to append an item in our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give test to the new h3 eelment
    h3El.textContent = this.name;
    ak.appendChild(h3El);
    for(var k = 0; k < hours.length; k++){
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log('liEl = ' + liEl);
      alki.appendChild(liEl);
      this.totalCookies = this.totalCookies + this.cookiesSoldByHour[k];
    }
    //Total cookies per day here
    var liEl = document.createElement('li');
    //creating li elements with text of the hours
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log('liEl = ' + liEl);
    alki.appendChild(liEl);
  }
};
alKi.render();
