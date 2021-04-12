create table cocktail_data(iddrink varchar(10) primary key, 
							strdrink varchar(255), 
							stringredient1 varchar(255), 
							stringredient2 varchar(255), 
							stringredient3 varchar(255), 
							stringredient4 varchar(255), 
							stringredient5 varchar(255), 
							stringredient6 varchar(255), 
							stringredient7 varchar(255), 
							stringredient8 varchar(255), 
							stringredient9 varchar(255), 
							stringredient10 varchar(255), 
							stringredient11 varchar(255), 
							stringredient12 varchar(255), 
							strmeasure1 float(3), 
						   	strmeasure2 float(3),
						   	strmeasure3 float(3),
						    strmeasure4 float(3),
						    strmeasure5 float(3),
						    strmeasure6 float(3),
						    strmeasure7 float(3),
						    strmeasure8 float(3),
						    strmeasure9 float(3),
						    strmeasure10 float(3),
						    strmeasure11 float(3),
						   	strmeasure12 float(3),
						    drink_abv float(3)
						  );
						  
create table spirit_totals(spirit varchar(255) primary key,
						   total float(3)
						  );
						 
create table abv_table(spirit varchar(255) primary key,
					   abv float(3)
					  );

select * from abv_table;

select * from cocktail_data;

select * from spirit_totals;


-- -- How to add PK after importing:
-- ALTER TABLE cocktail_data
-- ADD CONSTRAINT PK_idDrink PRIMARY KEY ("idDrink");