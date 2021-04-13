function solveBAC(form) {
    //grab drink input
    var drinkInput = d3.select("#drinkinput").node().value;
    //var drinkInput = drinkInput1.IgnoreCase;

    //console.log(drinkInput);
    var drinkOutput = d3.select("#drinkOutput");
    drinkOutput.text(drinkInput);

    //filter out drink info from csv
    //define url to grab data
    url ="http://localhost:5000/api/v1.0/strdrink"
    
    //filter out drink info from json
    d3.json(url, function(drinks) {
      var filteredData = drinks.filter(drink => drink.strdrink.toUpperCase() === drinkInput.toUpperCase());
      console.log(filteredData);

      //check to see if drink is in database
      if (filteredData==0){
        alert("Sorry, that drink is not in our database.\nAre you drunk?\nTry something else!")}
      else{        
    // grab ABV from data 
    var drinkABV = filteredData.map(drink => drink.drink_abv);
    var ABVOutput = d3.select("#ABVOutput");
    // put ABV in output table
    ABVOutput.text(drinkABV+ "%");
    //console.log(drinkABV)

    //grab gender from data
    var gender = d3.select('input[name="gender"]:checked').property("value")
    
    //determine gender constant for BAC calculation
    if (gender=="F"){
      gender_constant = 0.66;
    }
    else if(gender=="M"){
      gender_constant = 0.73;
    }
    else {gender_constant = 0.66};

    //get drink image from data
    //var drinkImage = filteredData.map(drink => drink.strImageSource);
    //var drink_image = document.getElementById("drinkImage");
    // put image in output table (CORBS errors in Chrome need to be addressed)
    //drink_image.src = drinkImage;
    //console.log(drinkImage);

    //grab first ingredient from data
    var drinkLiquor = filteredData.map(drink => drink.stringredient1);
    var LiquorOutput = d3.select("#LiquorOutput");
    LiquorOutput.text(drinkLiquor);
   
    // grab values for BAC calc from input form
    var ounces = eval(form.ounces.value);
    var weight = eval(form.weight.value);
    var hours = eval(form.hours.value);

    // define image elements that will change depending on BAC result
    var image = document.getElementById("myImage");
    var iframe = document.getElementById("map-iframe");
    var bacamountElement = d3.select("#bacamount");
    var messageElement = d3.select("#message");

    // bac calculation
    // Widmark formula: 
    var calc = (ounces *  drinkABV * 0.0514)/(weight * gender_constant) - (0.015 * hours);
    //
    // round value
    var result = calc.toFixed(4);
    // var result = (ounces * drinkABV * 0.075 / weight) - (hours * 0.015);
    console.log(result);
    
    //define map variable for loop
    var bars_var = "../static/html/Bars.html" 
    var bus_var = "../static/html/Bus_stop.html" 
    
    // if else statement bac result comparison to known alcohol effects + gif + map
    
    if (result <= 0) {
      message = "There is a negligible amount of alcohol in your system.  You are not legally intoxicated.";
      result = "-- neglible amount --";
      image.src = "https://media.giphy.com/media/ky16TkGK4RTs4/giphy.gif";
      iframe.src = bars_var;
    }

    else if (result == "NaN") {
        message = "Please try again.";
        image.src = "https://media.giphy.com/media/l2SpZMSn47KJ01g1G/giphy.gif";
        iframe.src = bars_var;
      }

     else if (result > 0 && result <= 0.025){
        message = "You are not legally intoxicated but may feel some effects";
        image.src = "https://media.giphy.com/media/bkKwwMj347FJe/giphy.gif";
        iframe.src = bars_var;
      }

     else if (result > 0.025 && result <=0.045){
        message = "Most people begin to feel relaxed at this point, but you're not legally intoxicated";
        image.src = "https://media.giphy.com/media/6hLODLJTkHf8c/giphy.gif";
        iframe.src = bars_var;
      }
        
     else if (result > 0.045 && result <= 0.065){
        message = "Your judgment is likely impaired, but you're not legally intoxicated";
        image.src = "https://media.giphy.com/media/FBayIVKx07DgwLzPFY/giphy.gif";
        iframe.src = bars_var;
      }
    
     else if (result > 0.065 && result < 0.08) {
        message = "You're at/approaching the legal limit. There's definite impairment of muscle coordination and driving skills."
        image.src = "https://media.giphy.com/media/96jP5ZSpYxtwQ/giphy.gif";
        iframe.src = bars_var;
        //console.log(result);
      }

     else if (result == 0.08){
        message = "In MOST and possibly ALL states you would be considered intoxicated and arrested for DUI.";
        image.src = "https://media.giphy.com/media/yoJC2NUmw6fFWD6E6I/giphy.gif";
        iframe.src = bus_var;
      }

     else if (result > 0.08) {
        message = "Go home, you're drunk.";
        image.src = "https://media.giphy.com/media/FJhQGaCZeumAw/giphy.gif";
        iframe.src = bus_var;
        //console.log(result);
      }

      else {
        //Set these to some default value
        message = "Something went wrong. Please try again.";
        image.src = "https://media.giphy.com/media/11NDdTESUQRkeQ/giphy.gif";
        iframe.src = bus_var;
        //console.log(result);
      }

    // write results into output table
    messageElement.text(message);
    bacamountElement.text(result + "%");};})}
  
  // https://awareawakealive.org/educate/blood-alcohol-content
  //https://www.teamdui.com/bac-widmarks-formula/#:~:text=BAC%20Calc%20Formula%20Widmark&text=To%20find%20A%20in%20the,%25%20alcohol%2C%20so%20it%20contains%20
  //  End -->
