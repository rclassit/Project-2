select strDrink, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4,Drink_ABV from cocktail_data
where strDrink LIKE '%Daiquiri%';

select strDrink, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4,Drink_ABV from cocktail_data
where strDrink = 'Daiquiri' 
or strDrink = 'Margarita'
or strDrink = 'Martini'
or strDrink = 'Mojito'
or strDrink = 'Whiskey Sour'
or strDrink = 'Moscow Mule'
or strDrink = 'Long Island Iced Tea';

select strDrink, strIngredient1, strMeasure1, strIngredient2, strMeasure2, strIngredient3, strMeasure3, strIngredient4, strMeasure4,Drink_ABV from cocktail_data
where strIngredient1 like '%Cacao%'
or strIngredient2 like '%Cacao%'
or strIngredient3 like '%Cacao%'
or strIngredient4 like '%Cacao%';