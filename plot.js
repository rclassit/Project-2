// NEED TO JSONIFY SPIRIT_TOTAL.CSV IN ORDER TO MAKE BUBBLE PLOT
// FLASK FEEDS JSON DATA: 
// 1. JAVASCRIPT CALLS TO FLASK FROM APP.PY
// 2. FLASK CALLS/QUERIES THE DATABASE 
// 3. RETURNS IN JSON FORMAT
// DON'T FORGET TO ADD PLOTLY CODE TO THE INDEX.HTML

var trace1 = {
  y: spirit_total.spirit,
  name: "spirit",
  type: "pie"
 
};

var trace2 = {
  y: spirit_total.Total,
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
