# Go Home, You're Drunk!
Link to project presentation: https://docs.google.com/presentation/d/1hg0k4MddUyLoif2o2-qJYaAsALTfFrxSbO-yW1urLQ4/edit#slide=id.gd09fde760a_0_0

#### Concept:
You’re at a bar, drinking some delicious cocktails. You’re feeling good, but wondering if you’re okay to drive home… or to the next bar. We have a solution for you! Simply enter your drink name, quantity, and a little information about yourself, and we’ll tell you the ABV of your cocktail, your BAC, and whether or not you’re good to drive. If your BAC is above the legal limit (0.08), we’ll give you a map of closest bus stops to you so you can get home. If your BAC is below the legal limit, we’ll give you a map of the closest bars to you so you can keep partying!

#### How we did it:
Using an API full of cocktail recipes and a table of liquor ABVs, we calculated the ABVs of cocktails using the ingredients and ingredient measurements. Then we took the BAC formula and set it up to take user input as wells as grab the ABV from the table. The resulting output determines whether a Google map of bus stops or bars shows up. We also have a pie chart showing the distribution of liquors in our dataset.
