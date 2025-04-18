let recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
  };
  console.log("Output of recipe card:");
  console.log(recipe.title);
  console.log("Serves: " + recipe.servings);
  console.log("Ingredients:");
  recipe.ingredients.forEach(ingredient => console.log(ingredient));
/*Output of recipe card:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa*/