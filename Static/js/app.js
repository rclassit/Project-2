// from data.js
var tableData = data;

// View data from data.js 
console.log(tableData);

//references

var tbody = d3.select("tbody");

// for loop for each column 
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

//Button build out 
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    //Select inputs for all columns 
    var Inputs = d3.select("#input");
    // Value properties 
    var Values = Inputs.property("value");
    // console.log(Values)
    // Filter Data 
    var FilterData = tableData.filter(sightings => sightings.datetime === Values ||
                                                   sightings.city === Values ||
                                                   sightings.state === Values ||
                                                   sightings.country === Values || 
                                                   sightings.shape === Values);

    // Filter check
    console.log(FilterData);

    // for loop to append table rows 

    FilterData.forEach(function(datasets) {
    console.log(datasets);
    var row = tbody.append("tr");
    Object.entries(datasets).forEach(function([key,value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});