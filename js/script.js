var cookieShop = function(location, time, min, max, avg) {
  this.location = location;
  this.time = ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'];
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgCookies = [];
  this.getTableRowInfo = function() {
    var row = document.createElement("tr");
    var locationCell = document.createElement("td");
    locationCell.innerText = this.location;
    row.appendChild(locationCell);
    var timeCell = document.createElement("td");
    timeCell.innerText = this.time;
    row.appendChild(timeCell);
    var avgCoookiesCell = document.createElement("td");
    avgCookiesCell.innerText = this.avgCookies;
    row.appendChild(avgCoookiesCell);
    return row;
  };
};

var storeLocation = [];
storeLocation.push(new cookieShop("Pioneer Square", 17, 88, 5.2));
storeLocation.push(new cookieShop("Portland Airport", 6, 44, 1.2));
storeLocation.push(new cookieShop("Washington Square", 11, 38, 1.9));
storeLocation.push(new cookieShop("Sellwood", 20, 48, 3.3));
storeLocation.push(new cookieShop("Pearl District", 3, 24, 2.6));

this.getRandomInt = function() {
  return Math.floor(Math.random() * (this.max-this.min)) + this.min;
};

this.random = function() {
  return Math.floor(this.getRandomInt (this.min, this.max) * this.avg);
};

this.avgCookies = [],
this.averageCookies = function(){
  for (var index=0; index<this.location.time.length; index++) {
        this.location.avgCookies.push(this.location.random());
      }
    },

buildResultsTable = function(){
  var tableBody =
  document.getElementById("results");
  tableBody.innerHTML = "<tr><th></th><th></th></tr>";
  for (var index = 0; index < storeLocation.length; index++) {
  tableBody.appendChild(results[index].getTableRowInfo());
    }
  };

buildResultsTable();

// this.writeResults = function(){
//   var total = 0;
//   document.getElementById('results').innerHTML += this.location.name + "<br>";
//     for (var index=0; index<this.location.time.length; index++) {
//     total += this.location.avgCookies[index];
//     document.getElementById('results').innerHTML += "<li>" + this.location.time[index] + ": " + this.location.avgCookies[index] + "</li>";
//     }
//     document.getElementById('results').innerHTML += "<li>Total:  " + total + "</li><br>";
//     };

    //this.location.averageCookies();
    //this.location.writeResults();

// var location1 = {
//   name: "Pioneer Square",
//   min: 17,
//   max: 88,
//   avg: 5.2,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   },
//
//   random: function() {
//     return Math.floor(location1.getRandomInt (location1.min, location1.max) * location1.avg);
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location1.time.length; index++) {
//       location1.avgCookies.push(location1.random());
//     }
//   },
//
//   writeResults: function(){
//     var total = 0;
//     document.getElementById('results').innerHTML += location1.name + "<br>";
//     for (var index=0; index<location1.time.length; index++) {
//       total += location1.avgCookies[index];
//       document.getElementById('results').innerHTML += "<li>" + location1.time[index] + ": " + location1.avgCookies[index] + "</li>";
//     }
//     document.getElementById('results').innerHTML += "<li>Total:  " + total + "</li><br>";
//   }
// };
// location1.averageCookies()
// location1.writeResults()
//
// var location2 = {
//   name: "Portland Airport",
//   min: 6,
//   max: 24,
//   avg: 1.2,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   },
//
//   random: function() {
//     return Math.floor(location2.getRandomInt (location2.min, location2.max) * location2.avg);
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location2.time.length; index++) {
//       location2.avgCookies.push(location2.random());
//     }
//   },
//
//   writeResults: function(){
//     var total = 0;
//     document.getElementById('results').innerHTML += location2.name + "<br>";
//     for (var index=0; index<location2.time.length; index++) {
//       total += location2.avgCookies[index];
//       document.getElementById('results').innerHTML += "<li>" + location2.time[index] + ": " + location2.avgCookies[index] + "</li>";
//     }
//     document.getElementById('results').innerHTML += "<li>Total:  " + total + "</li><br>";
//     },
//   };
//
// location2.averageCookies()
// location2.writeResults()
//
//
// var location3 = {
//   name: "Washington Square",
//   min: 11,
//   max: 38,
//   avg: 1.9,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   },
//
//   random: function() {
//     return Math.floor(location3.getRandomInt (location3.min, location3.max) * location3.avg);
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location3.time.length; index++) {
//       location3.avgCookies.push(location3.random());
//     }
//   },
//
//   writeResults: function(){
//     var total = 0;
//     document.getElementById('results').innerHTML += location3.name + "<br>";
//     for (var index=0; index<location3.time.length; index++) {
//       total += location3.avgCookies[index];
//       document.getElementById('results').innerHTML += "<li>" + location2.time[index] + ": " + location2.avgCookies[index] + "</li>";
//     }
//     document.getElementById('results').innerHTML += "<li>Total:  " + total + "</li><br>";
//   },
// };
//
// location3.averageCookies()
// location3.writeResults()
//
//
// var location4 = {
//   name: "Sellwood",
//   min: 20,
//   max: 48,
//   avg: 3.3,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   },
//   random: function() {
//     return Math.floor(location4.getRandomInt (location4.min, location4.max) * location4.avg);
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location4.time.length; index++) {
//       location4.avgCookies.push(location4.random());
//     }
//   },
//
//   writeResults: function(){
//     var total = 0;
//     document.getElementById('results').innerHTML += location4.name + "<br>";
//     for (var index=0; index<location4.time.length; index++) {
//       total += location4.avgCookies[index];
//       document.getElementById('results').innerHTML += "<li>" + location4.time[index] + ": " + location4.avgCookies[index] + "</li>";
//     }
//     document.getElementById('results').innerHTML += "<li>Total:  " + total + "</li>" + "</li><br>";
//     },
//   };
//
// location4.averageCookies()
// location4.writeResults()
//
//
// var location5 = {
//   name: "Pearl District",
//   min: 3,
//   max: 24,
//   avg: 2.6,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   },
//   random: function() {
//     return Math.floor(location5.getRandomInt (location5.min, location5.max) * location5.avg);
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location5.time.length; index++) {
//       location5.avgCookies.push(location5.random());
//     }
//   },
//   writeResults: function(){
//     var total = 0;
//     document.getElementById('results').innerHTML += location5.name + "<br>";
//     for (var index=0; index<location5.time.length; index++) {
//       total += location5.avgCookies[index];
//       document.getElementById('results').innerHTML += "<li>" + location5.time[index] + ": " + location5.avgCookies[index] + "</li>";
//     }
//     document.getElementById('results').innerHTML += "<li>Total:  " + total + "</li><br>";
//     },
//   };
//
// location5.averageCookies()
// location5.writeResults()
