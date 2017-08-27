//Constructor

var cookieShop = function(location, min, max, avg) {
  this.location = location;
  this.time = ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'];
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.avgCookies = [];
  this.getTableRowInfo = function() {
    var row = document.createElement("tr");
    var locationCell = document.createElement("td");
    locationCell.innerText = this.location;
    row.appendChild(locationCell);

    for (var index = 0; index < this.time.length; index++) {
      var timeCell = document.createElement("td");
      timeCell.innerText = this.avgCookies[index];
      row.appendChild(timeCell);
    }

    row.appendChild(timeCell);
    var totalCell = document.createElement("td");
    totalCell.innerText = this.total;
    row.appendChild(totalCell);
    return row;
  };

  this.getRandomInt = function() {
  var randomCustomer =  Math.floor(Math.random() * (this.max-this.min)) + this.min;
  console.log(randomCustomer);
  return randomCustomer;
  };

  this.averageCookies = function(){
    for (var index = 0; index < this.time.length; index++) {
        var cookiesSold =  Math.floor(this.getRandomInt () * this.avg);
        this.avgCookies.push(cookiesSold);
        this.total += cookiesSold;
        }
      };
};

var storeLocation = [];
storeLocation.push(new cookieShop("Pioneer Square", 17, 88, 5.2));
storeLocation.push(new cookieShop("Portland Airport", 6, 44, 1.2));
storeLocation.push(new cookieShop("Washington Square", 11, 38, 1.9));
storeLocation.push(new cookieShop("Sellwood", 20, 48, 3.3));
storeLocation.push(new cookieShop("Pearl District", 3, 24, 2.6));

var tableBody =
  document.getElementById("results");
  for (var index = 0; index < storeLocation.length; index++) {
  storeLocation[index].averageCookies();
  tableBody.appendChild(storeLocation[index].getTableRowInfo());
    }

//Input form for new stores and numbers
    function showData() {
      var form = document.forms['newCookieShopForm'];
      var newName = form.elements['cookieShopName'];
      var minCustomers = form.elements['minCustomers'];
      var maxCustomers = form.elements['maxCustomers'];
      var avgCustomers = form.elements['avgCustomers'];
      var message = "New Store: ";
      message += "\n Name:  "+newName.value;
      message += "\n Min: "+minCustomers.value;
      message += "\n Max: "+maxCustomers.value;
      message += "\n Avg: "+avgCustomers.value;
      newStore = new cookieShop (newName.value, parseInt(minCustomers.value), parseInt(maxCustomers.value), parseFloat(avgCustomers.value));
      storeLocation.push(newStore);
      newStore.averageCookies();
      tableBody.appendChild(newStore.getTableRowInfo());
    }
