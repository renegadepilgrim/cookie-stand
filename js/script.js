
var location1 = {
  name: "Pioneer Square",
  min: 17,
  max: 88,
  avg: 5.2,

  getRandomInt: function (min, max){
    return Math.floor(Math.random() * (max-min)) + min;
  },

  random: function() {
    return location1.getRandomInt (location1.min, location1.max) * location1.avg;
  },

  time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
  avgCookies: [],
  averageCookies: function(){
    for (var index=0; index<location1.time.length; index++) {
      location1.avgCookies.push(location1.random());
    }
  },

  writeResults: function(){
    var total = 0;
    document.getElementById('results').innerHTML = location1.name + "<br>";
    for (var index=0; index<location1.time.length; index++) {
      total += location1.avgCookies[index];
      document.getElementById('results').innerHTML += "<li>" + location1.time[index] + ":" + location1.avgCookies[index] + "</li>";
    }
    document.getElementById('results').innerHTML += "<li> Total: " + total + "</li>";
  },
};

location1.averageCookies()
location1.writeResults()


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
//     random: function() {
//       return location2.getRandomInt (location2.min, location2.max) * location2.avg;
//     },
//
//     time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//     avgCookies: [],
//     averageCookies: function(){
//       for (var index=0; index<location2.time.length; index++) {
//         location2.avgCookies.push(location2.random());
//       }
//       document.getElementById('results').innerHTML
//     }
// }
//
// var location3 = {
//   name: "Washington Square",
//   min: 11,
//   max: 38,
//   avg: 1.9,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   }
//
//   random: function() {
//     return location3.getRandomInt (location3.min, location3.max) * location3.avg;
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location3.time.length; index++) {
//       location3.avgCookies.push(location3.random());
//     }
//     document.getElementById('results').innerHTML
//   }
// }
//
// var location4 = {
//   name: "Sellwood",
//   min: 20,
//   max: 48,
//   avg: 3.3,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   }
//   random: function() {
//     return location4.getRandomInt (location4.min, location4.max) * location4.avg;
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location4.time.length; index++) {
//       location4.avgCookies.push(location4.random());
//     }
//   document.getElementById('results').innerHTML
//   }
// }
//
// var location5 = {
//   name: "Pearl District",
//   min: 3,
//   max: 24,
//   avg: 2.6,
//
//   getRandomInt: function (min, max){
//     return Math.floor(Math.random() * (max-min)) + min;
//   }
//   random: function() {
//     return location5.getRandomInt (location5.min, location5.max) * location5.avg;
//   },
//
//   time: ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'],
//   avgCookies: [],
//   averageCookies: function(){
//     for (var index=0; index<location5.time.length; index++) {
//       location5.avgCookies.push(location5.random());
//     }
//   document.getElementById('results').innerHTML
//   }
// }
