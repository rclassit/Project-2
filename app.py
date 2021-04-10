import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import psycopg2 
from flask import Flask, jsonify, request
# from flask_cors import CORS


#################################################
# Database Setup
#################################################



username = 'postgres'
password = 'password'
rds_connection_string = f"{username}:{password}@localhost:5432/drinks"
engine = create_engine(f'postgresql://{rds_connection_string}')



# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
cocktail_data = Base.classes.cocktail_data

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


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


@app.route("/api/v1.0/strdrink/")
def strdrink():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all drink names"""
    # Query all drinks
    results = session.query(cocktail_data.strdrink).all()

    session.close()

    # Convert list of tuples into normal list
    all_strdrink = list(np.ravel(results))

    return jsonify(all_strdrink)

# ---------add too latest app.py on repo--------------

# FOR CALLING SPIRIT TOTAL    
@app.route("/api/v1.0/spirit_total")
def spirit_total():
    # Create our session (link) from Python to the DB
    session = Session(engine)

  
    results = session.query(spirit_total.spirit, spirit_total.total).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all drinks
    all_spirit_total = []
    for spirit, total in results:
        spirit_total_dict = {}
        spirit_total_dict["spirit"] = spirit
        spirit_total_dict["total"] = total
        all_spirit_total.append(spirit_total_dict)

    return jsonify(all_spirit_total)

# ---------add too latest app.py on repo--------------

# @app.route("/api/v1.0/strdrink")
# def strdrink():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of drink data including the drink, abv, and firstingredient of each drink"""
#     # Query all drinks
   
#     results = session.query(cocktail_data.strdrink, cocktail_data.drink_abv, cocktail_data.stringredient1).all()

#     session.close()

#     # Create a dictionary from the row data and append to a list of all drinks
#     all_strdrink = []
#     for strdrink, drink_abv, stringredient1 in results:
#         strdrink_dict = {}
#         strdrink_dict["strdrink"] = strdrink
#         strdrink_dict["drink_abv"] = drink_abv
#         strdrink_dict["stringredient1"] = stringredient1
#         all_strdrink.append(strdrink_dict)

#     return jsonify(all_strdrink)


if __name__ == '__main__':
    app.run(debug=True)
