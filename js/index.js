//Recipes Data
var recipes = [
    {
        name: "Chicken Tikka Masala",
        desc: "Rich and creamy Indian curry with tender chicken pieces",
        image: "./images/photo-1565557623262-b51c2513a641.avif",
        rating: 4.7,
        reviews: 389,
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people",
        category: ["Intermediate", "Asian"],

        ingredients: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 tablespoons ginger, grated",
            "400g canned tomatoes",
            "Fresh cilantro for garnish"
        ],

        instructions: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
        ],

        nutrition: {
            calories: "450 kcal",
            protein: "38g",
            carbs: "24g",
            fat: "22g",
            fiber: "4g",
            sodium: "760mg"
        },

        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
        ]
    },

    {
        name: "Chicken Stir-Fry",
        desc: "Quick and healthy stir-fry with colorful vegetables",
        image: "./images/photo-1603133872878-684f208fb84b.avif",
        rating: 4.5,
        reviews: 324,
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "4 people",
        category: ["Easy", "Asian"],

        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],

        instructions: [
            "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
            "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
            "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
            "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
            "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
            "Serve immediately over steamed rice or noodles."
        ],

        nutrition: {
            calories: "320 kcal",
            protein: "34g",
            carbs: "18g",
            fat: "12g",
            fiber: "5g",
            sodium: "840mg"
        },

        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ]
    },

    {
        name: "Creamy Spaghetti Carbonara",
        desc: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        image: "./images/photo-1612874742237-6526221588e3.avif",
        rating: 4.8,
        reviews: 234,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        category: ["Easy", "Italian"],

        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta or guanciale, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "Freshly ground black pepper",
            "Salt for pasta water"
        ],

        instructions: [
            "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
            "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
            "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
        ],

        nutrition: {
            calories: "520 kcal",
            protein: "28g",
            carbs: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg"
        },

        tips: [
            "Use room temperature eggs for a smoother sauce consistency",
            "Work quickly when mixing eggs with hot pasta to avoid scrambling",
            "Reserve extra pasta water - it's the secret to perfect creaminess",
            "Freshly grated cheese makes all the difference in flavor",
            "Never add cream - authentic carbonara is made with eggs only"
        ]
    },

    {
        name: "Lasagna Bolognese",
        desc: "Layered Italian pasta with rich meat sauce and béchamel",
        image: "./images/photo-1574894709920-11b28e7367e3.avif",
        rating: 4.9,
        reviews: 478,
        prepTime: "30 min",
        cookTime: "90 min",
        servings: "4 people",
        category: ["Intermediate", "Italian"],

        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "400g canned tomatoes",
            "1 onion, diced",
            "2 carrots, diced",
            "500ml béchamel sauce",
            "200g mozzarella, grated",
            "100g parmesan cheese",
            "Fresh basil"
        ],

        instructions: [
            "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
            "Cook lasagna sheets according to package directions. Drain and set aside.",
            "Preheat oven to 180°C (350°F).",
            "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
            "Top final layer with béchamel, mozzarella, and parmesan cheese.",
            "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
        ],

        nutrition: {
            calories: "680 kcal",
            protein: "42g",
            carbs: "58g",
            fat: "28g",
            fiber: "6g",
            sodium: "920mg"
        },

        tips: [
            "Make bolognese sauce a day ahead for better flavor",
            "Don't skip the resting time after baking",
            "Use fresh pasta sheets for best texture",
            "Freeze leftovers in individual portions"
        ]
    },

    {
        name: "Shrimp Scampi",
        desc: "Garlicky shrimp in white wine butter sauce",
        image: "./images/photo-1633504581786-316c8002b1b9.avif",
        rating: 4.8,
        reviews: 356,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        category: ["Easy", "Seafood"],

        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup white wine",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest",
            "Red pepper flakes"
        ],

        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],

        nutrition: {
            calories: "520 kcal",
            protein: "36g",
            carbs: "54g",
            fat: "18g",
            fiber: "3g",
            sodium: "620mg"
        },

        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste"
        ]
    },

    {
        name: "Classic Beef Burger",
        desc: "Juicy homemade burger with all the fixings",
        image: "./images/photo-1568901346375-23c9450c58cd.avif",
        rating: 4.6,
        reviews: 421,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
        category: ["Easy", "American"],

        ingredients: [
            "500g ground beef (80/20)",
            "4 burger buns",
            "4 slices cheddar cheese",
            "Lettuce leaves",
            "Tomato slices",
            "Red onion, sliced",
            "Pickles",
            "Burger sauce or condiments"
        ],

        instructions: [
            "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
            "Season patties generously with salt and pepper on both sides.",
            "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
            "Add cheese slices in the last minute of cooking and cover to melt.",
            "Toast burger buns lightly on the grill or in a pan.",
            "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
        ],

        nutrition: {
            calories: "650 kcal",
            protein: "38g",
            carbs: "42g",
            fat: "35g",
            fiber: "2g",
            sodium: "920mg"
        },

        tips: [
            "Don't press down on burgers while cooking - keeps them juicy",
            "Make indent in center to prevent burger from puffing up",
            "Let patties rest for 2-3 minutes before serving",
            "Toast buns for better texture and flavor"
        ]
    },

    {
        name: "French Onion Soup",
        desc: "Rich beef broth with caramelized onions and melted cheese",
        image: "./images/photo-1547592166-23ac45744acd.avif",
        rating: 4.7,
        reviews: 267,
        prepTime: "15 min",
        cookTime: "60 min",
        servings: "4 people",
        category: ["Intermediate", "Mediterranean"],

        ingredients: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup white wine",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyère cheese, grated"
        ],

        instructions: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add white wine and deglaze the pot, scraping up brown bits.",
            "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast baguette slices until golden.",
            "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
            "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
        ],

        nutrition: {
            calories: "380 kcal",
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg"
        },

        tips: [
            "Patience is key - don't rush the onion caramelization",
            "Use good quality beef broth for best flavor",
            "Gruyère can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning"
        ]
    },

    {
        name: "Greek Moussaka",
        desc: "Traditional layered eggplant casserole with lamb",
        image: "./images/photo-1601050690597-df0568f70950.avif",
        rating: 4.8,
        reviews: 234,
        prepTime: "30 min",
        cookTime: "60 min",
        servings: "4 people",
        category: ["Intermediate", "Mediterranean"],

        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml béchamel sauce",
            "100g parmesan cheese",
            "Cinnamon and oregano",
            "Olive oil"
        ],

        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
        ],

        nutrition: {
            calories: "580 kcal",
            protein: "36g",
            carbs: "32g",
            fat: "32g",
            fiber: "8g",
            sodium: "820mg"
        },

        tips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ]
    },

    {
        name: "Teriyaki Chicken Bowl",
        desc: "Sweet and savory chicken over rice with vegetables",
        image: "./images/photo-1546069901-eacef0df6022.avif",
        rating: 4.7,
        reviews: 367,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "2 people",
        category: ["Easy", "Asian"],

        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],

        instructions: [
            "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
            "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
            "Meanwhile, steam broccoli and carrots until tender-crisp.",
            "Divide rice between bowls.",
            "Top with teriyaki chicken and steamed vegetables.",
            "Garnish with sesame seeds and green onions. Serve hot."
        ],

        nutrition: {
            calories: "540 kcal",
            protein: "42g",
            carbs: "58g",
            fat: "14g",
            fiber: "4g",
            sodium: "1240mg"
        },

        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ]
    },

    {
        name: "Vegetable Curry",
        desc: "Hearty vegetarian curry with coconut milk",
        image: "./images/photo-1585032226651-759b368d7246.avif",
        rating: 4.6,
        reviews: 289,
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people",
        category: ["Easy", "Asian"],

        ingredients: [
            "2 potatoes, cubed",
            "1 cauliflower, florets",
            "2 carrots, sliced",
            "1 can chickpeas",
            "400ml coconut milk",
            "3 tablespoons curry powder",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "Fresh spinach"
        ],

        instructions: [
            "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
            "Add potatoes and carrots, cook for 5 minutes.",
            "Pour in coconut milk and 1 cup water. Bring to simmer.",
            "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
            "Stir in fresh spinach and cook until wilted.",
            "Serve hot over basmati rice or with naan bread."
        ],

        nutrition: {
            calories: "380 kcal",
            protein: "14g",
            carbs: "48g",
            fat: "16g",
            fiber: "12g",
            sodium: "480mg"
        },

        tips: [
            "Add vegetables in order of cooking time needed",
            "Adjust curry powder amount to taste",
            "Use full-fat coconut milk for creamier curry",
            "Add protein like tofu or paneer if desired"
        ]
    }
];


//HTML Elements
var img = document.querySelector(".test-img");
var rating = document.querySelector(".rating");
var rateExp = document.querySelector(".rate-exp");
var times = document.querySelectorAll(".times");
var nameRecipe = document.querySelector(".name-recipe");
var descRecipe = document.querySelector(".desc-recipe");
var ingredientList = document.getElementById("ingredient-list");
var instructionList = document.getElementById("instruction-list");
var nutritionValues = document.querySelectorAll(".nutrition-steps");
var tipsBox = document.getElementById("tips-box");
var categoryBox = document.getElementById("category-box");
var warningCard = document.querySelector(".warning-card");


//Load Random Recipe
function loadRandomRecipe() {

    //Random Selection
    var randomIndex = Math.floor(Math.random() * recipes.length);
    var recipe = recipes[randomIndex];

    //Basic Info
    img.src = recipe.image;
    rating.textContent = recipe.rating;
    rateExp.textContent = `(${recipe.reviews} reviews)`;
    times[0].textContent = recipe.prepTime;
    times[1].textContent = recipe.cookTime;
    times[2].textContent = recipe.servings;
    nameRecipe.textContent = recipe.name;
    descRecipe.textContent = recipe.desc;

    //Handle Warning Card
    var prep = parseInt(recipe.prepTime); 
    var cook = parseInt(recipe.cookTime); 
    var totalTime = prep + cook;

    if (totalTime >= 45) {
        warningCard.style.display = "block";
    } else {
        warningCard.style.display = "none";
    }

    //Categories
    categoryBox.innerHTML = "";

    for (var i = 0; i < recipe.category.length -1; i++) {
        categoryBox.innerHTML += `
            <span class="py-1 px-3 rounded rounded-pill me-2 fw-semibold satues1">
                ${recipe.category[0]}
            </span>
            <span class="py-1 px-3 rounded rounded-pill me-2 fw-semibold satues2">
                ${recipe.category[1]}
            </span>
        `;
    }

    //Ingredients
    ingredientList.innerHTML = "";

    for (var j = 0; j < recipe.ingredients.length; j++) {

        var li = document.createElement("li");
        li.classList.add("mb-3", "text-decoration-none");

        li.innerHTML = `
            <div class="fw-bold text-white rounded rounded-circle d-inline me-2 number-style">
                ${j + 1}
            </div>
            <span class="ingredient-steps">${recipe.ingredients[j]}</span>
        `;

        ingredientList.appendChild(li);
    }

    //Instructions
    instructionList.innerHTML = "";

    for (var i = 0; i < recipe.instructions.length; i++) {

        var div = document.createElement("div");
        div.classList.add("d-flex", "align-items-center" ,"gap-3", "mb-4");

        div.innerHTML = `
            <div class="fw-bold fs-5 text-white rounded rounded-4 numbre2-style">
                ${i + 1}
            </div>
            <div class="instruction-steps">
                ${recipe.instructions[i]}
            </div>
        `;

        instructionList.appendChild(div);
    }

    //Nutrition
    var nutritionData = [
        recipe.nutrition.calories,
        recipe.nutrition.protein,
        recipe.nutrition.carbs,
        recipe.nutrition.fat,
        recipe.nutrition.fiber,
        recipe.nutrition.sodium
    ];

    for (var i = 0; i < nutritionValues.length; i++) {
        nutritionValues[i].textContent = nutritionData[i];
    }

    //Chef Tips
    tipsBox.innerHTML = "";

    for (var i = 0; i < recipe.tips.length; i++) {

        var div = document.createElement("div");
        div.classList.add("chef-card", "py-3", "px-4", "rounded", "rounded-3", "mb-3");

        div.innerHTML = `
            <div class="d-flex gap-3 align-items-center">
                <i class="fa-solid fa-check text-white rounded rounded-circle chef-icon"></i>
                <p class="mb-0 chef-text">${recipe.tips[i]}</p>
            </div>
        `;

        tipsBox.appendChild(div);
    }
}

//Call
loadRandomRecipe();
