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

var url =`localhost:5000/api/v1.0/spirit_totals`;

// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }cx

function buildPlot() {
  d3.json(url), function(data) { 
    console.log(data);

    var s_array = []
    var t_array =[]

    for (var s = 0; s < data.length; s++) {
      var s_dict = data[s];
      
      // push each spirit  and total value into own array
        s_array.push(s_dict["spirit"]);
        t_array.push(s_dict["total"])
      }
      
    var spirit = s_array;
    var totals = t_array;
      
    var trace1 = {
      x: totals,
      y: spirit,
      type: "pie"
      
    };

    var data = [trace1];

    // var layout = {
    //   height: 400,
    //   width: 500
    //   };
    
    var layout = {
      title: "Cocktail Spirit Totals",
      xaxis: { 
        range: [0,100],
        type: "number"
    },
      yaxis: {
        autorange: true,
        type: "linear"
    }
  };

    Plotly.newPlot("plot", data, layout);
  
  

};
buildPlot();
