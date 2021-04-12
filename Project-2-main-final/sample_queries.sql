-- selecting one drink using "LIKE" to get drinks with similar names
select "strdrink", "stringredient1", "strmeasure1", "stringredient2", "strmeasure2", "stringredient3", "strmeasure3", "stringredient4", "strmeasure4", "drink_abv" from cocktail_data
where "strdrink" LIKE '%Daiquiri%';

-- sample selection of drinks
select "strdrink", "stringredient1", "strmeasure1", "stringredient2", "strmeasure2", "stringredient3", "strmeasure3", "stringredient4", "strmeasure4", "drink_abv" from cocktail_data
where "strdrink" = 'Daiquiri' 
or "strdrink" = 'Margarita'
or "strdrink" = 'Martini'
or "strdrink" = 'Mojito'
or "strdrink" = 'Whiskey Sour'
or "strdrink" = 'Moscow Mule'
or "strdrink" = 'Long Island Iced Tea';

-- checking accent marks in abv table are accounted for, using the "Cacao" for "Creme de Cacao" - accent on the second e was causing an issue
select "strdrink", "stringredient1", "strmeasure1", "stringredient2", "strmeasure2", "stringredient3", "strmeasure3", "stringredient4", "strmeasure4", "drink_abv" from cocktail_data
where "stringredient1" like '%Cacao%'
or "stringredient2" like '%Cacao%'
or "stringredient3" like '%Cacao%'
or "stringredient4" like '%Cacao%';


-- checking for 0 ABVs to know what is left to clean
select "strdrink", "stringredient1", "strmeasure1", "stringredient2", "strmeasure2", "stringredient3", "strmeasure3", "stringredient4", "strmeasure4", "drink_abv" from cocktail_data
where "drink_abv" = 0;