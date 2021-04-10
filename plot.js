// NEED TO JSONIFY SPIRIT_TOTAL.CSV IN ORDER TO MAKE BUBBLE PLOT
// FLASK FEEDS JSON DATA: 
// 1. JAVASCRIPT CALLS TO FLASK FROM APP.PY
// 2. FLASK CALLS/QUERIES THE DATABASE 
// 3. RETURNS IN JSON FORMAT
// DON'T FORGET TO ADD PLOTLY CODE TO THE INDEX.HTML



// ADD THIS CODE TO index
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Basic Charts</title>
//     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
// </head>
// <body>
//     <div id="plot"></div>
//     <script src="plot.js"></script>
// </body>
// </html>

url ="http://localhost:5000/api/v1.0/spirit_totals"
    //filter out drink info from json
    d3.json(url, function(totals) {
    
      var data = totals.spirit
      var data2 = totals.totals
      


// PLOT CODE
var trace1 = {
  y: data,
  name: "spirit",
  type: "pie"
 
};

var trace2 = {
  y: data2,
  name: "Total",
  type: "pie"
 
};

var data = [trace1, trace2];

var layout = {
  title: "Cocktail Spirit Totals",
  yaxis: { title: "Total"}
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
