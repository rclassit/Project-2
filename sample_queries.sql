-- selecting one drink using "LIKE" to get drinks with similar names
select strDrink, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4,Drink_ABV from cocktail_data
where strDrink LIKE '%Daiquiri%';

-- sample selection of drinks
select strDrink, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4,Drink_ABV from cocktail_data
where strDrink = 'Daiquiri' 
or strDrink = 'Margarita'
or strDrink = 'Martini'
or strDrink = 'Mojito'
or strDrink = 'Whiskey Sour'
or strDrink = 'Moscow Mule'
or strDrink = 'Long Island Iced Tea';

-- checking accent marks in abv table are accounted for, using the "Cacao" for "Creme de Cacao" - accent on the second e was causing an issue
select strDrink, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4,Drink_ABV from cocktail_data
where strIngredient1 like '%Cacao%'
or strIngredient2 like '%Cacao%'
or strIngredient3 like '%Cacao%'
or strIngredient4 like '%Cacao%';

-- checking for 0 ABVs to know what is left to clean
select strDrink, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4,Drink_ABV from cocktail_data
where Drink_ABV = 0