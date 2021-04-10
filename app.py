import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import psycopg2 
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin


# Create an instance of Flask
app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ORIGINS'] = '*'
app.config['DEBUG'] = True


#################################################
# Database Setup
#################################################



username = 'postgres'
password = 'password'
rds_connection_string = f"{username}:{password}@localhost:5432/Project-2"
engine = create_engine(f'postgresql://{rds_connection_string}')



# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

print(Base.classes.keys())

# Save reference to the table
cocktail_data = Base.classes.cocktail_data


#################################################
# Flask Routes
#################################################

# @app.route("/")
# def sample():
#     # data = query from table
#     data = cocktail_data
    
#     # returns list of dictionaries or dictionary
#     return jsonify(data)

@app.route("/")
def index():
    
    return ("index.html")

# route to return data for bac calculator
@app.route("/api/v1.0/strdrink")
def strdrink():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of drink data including the drink, abv, and firstingredient of each drink"""
    # Query all drinks

    results = session.query(
        cocktail_data.strDrink, cocktail_data.Drink_ABV, cocktail_data.strIngredient1).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all drinks
    all_strDrink = []
    for strDrink, Drink_ABV, strIngredient1 in results:
        strDrink_dict = {}
        strDrink_dict["strDrink"] = strDrink
        strDrink_dict["Drink_ABV"] = Drink_ABV
        strDrink_dict["strIngredient1"] = strIngredient1
        all_strDrink.append(strDrink_dict)

    return jsonify(all_strDrink)

# ---------add to latest app.py on repo--------------

# FOR CALLING SPIRIT TOTAL    
@app.route("/api/v1.0/spirit_totals")
def spirit_totals():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of drink data including the drink, abv, and firstingredient of each drink"""
    # Query all drinks
   
    results = session.query(spirit_totals.spirit, spirit_totals.total).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all drinks
    all_spirit_totals = []
    for spirit, total in results:
        spirit_totals_dict = {}
        spirit_totals_dict["spirit"] = spirit
        spirit_totals_dict["total"] = total
        all_spirit_totals.append(spirit_totals_dict)

    return jsonify(all_spirit_totals)




if __name__ == '__main__':
    app.run(debug=True)
