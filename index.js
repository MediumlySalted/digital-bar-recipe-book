
let recipes = [
    {
        "name": "Black Widow",
        "tags": [
            "Tart",
            "Lemon",
            "Blackberry",
            "Tequila"
        ],
        "ingredients": [
            "1.5oz Tequila",
            "1oz Lemon Juice",
            "0.5oz Blackberry Rosemary"
        ],
        "directions": [
            "Shake & Strain into a coupe",
            "Garnish with a dried lemon wheel"
        ]
    },
    {
        "name": "Princess Peach",
        "tags": [
            "Sweet",
            "Lemon",
            "Peach",
            "Vodka"
        ],
        "ingredients": [
            "2oz Peach & Orange Blossom Vodka",
            "0.5oz Peach Schnapps",
            "1oz Lemon Juice",
            "0.5 Orange Juice",
            "0.5 Simple Syrup",
        ],
        "directions": [
            "Shake & Pour into a tall glass",
            "Top with sprite",
            "Garnish with a orange wheel half"
        ]
    },
    {
        "name": "Green Tea Shot",
        "tags": [
            "Sour",
            "Lemon",
            "Lime",
            "Peach",
            "Whiskey"
        ],
        "ingredients": [
            "0.75oz Jameson",
            "0.75oz Peach Schnapps",
            "0.75oz Sour Mix",
        ],
        "directions": [
            "Shake & Strain into a shot glass",
        ]
    },
    {
        "name": "Sweet Baby K",
        "tags": [
            "Sweet",
            "Lemon",
            "Peach",
            "Whiskey"
        ],
        "ingredients": [
            "1.5oz Peach Bourbon",
            "1oz Lemon Juice",
            "0.5oz Simple Syrup",
        ],
        "directions": [
            "Shake with mint & Pour into a tall glass",
            "Top with sprite",
            "Garnish with a lime"
        ]
    },
    {
        "name": "Lemon Drop Martini",
        "tags": [
            "Tart",
            "Lemon",
            "Vodka"
        ],
        "ingredients": [
            "1.5oz Vodka",
            "0.75oz Lemon Juice",
            "0.75oz Simple Syrup",
        ],
        "directions": [
            "Shake & Strain into a coupe",
            "Garnish with a lemon wheel"
        ]
    },
    {
        "name": "Margarita",
        "tags": [
            "Sour",
            "Lime",
            "Tequila"
        ],
        "ingredients": [
            "1.5oz Tequila",
            "0.5oz Triple Sec",
        ],
        "directions": [
            "Salt the rip of a tall glass",
            "Build ingredients and top with sour mix",
            "Garnish with lime wedge",
        ]
    },
    {
        "name": "Smoked Old Fashioned",
        "tags": [
            "Spirit Forward",
            "Orange",
            "Bourbon"
        ],
        "ingredients": [
            "2oz Bourbon",
            "0.5oz Simple Syrup",
            "4 drops of orange bitters",
        ],
        "directions": [
            "Shake the bourbon in a smoked shaker",
            "Add the simple syrup and stir with a big ice cube",
            "Garnish with an orange twist, cherry, and bitters",
        ]
    },
    
]

let tagColors = {
    'Tart': '#D6F660',
    'Sweet': '#F1948A',
    'Sour': '#BDEA61',
    'Spirit Forward': '#DFB662',
    'Lemon': '#F7DC6F',
    'Lime': '#7DCEA0',
    'undefined': '#E5E7E9'
}

function alphabeticSort( a, b ) {
    if (a.name < b.name) {
        return -1
    } else if (a.name > b.name) {
        return 1
    }
    return 0
}

function searchRecipes() {
    let filteredRecipes = recipes.filter( function(recipe) {
        let keyword = document.getElementById("searchInput").value
        recipeValues = Object.values(recipe)
        foundMatch = false
        recipeValues.forEach( function(recipeValue) {
            if (typeof recipeValue == 'object') {
                recipeValue.forEach( function(val) {
                    if (val.toString().toLowerCase().includes(keyword.toString().toLowerCase())) {
                        foundMatch = true
                    }
                })
            }
            if (recipeValue.toString().toLowerCase().includes(keyword.toString().toLowerCase())) {
                foundMatch = true
            }
        })
        return foundMatch
    })
    placeRecipes(filteredRecipes)
}

function placeRecipes(listOfRecipes) {
    clearRecipes()
    let mainContainer = document.getElementById("mainContainer")
    listOfRecipes.sort(alphabeticSort)
    listOfRecipes.forEach( function(recipe, i) {
        let recipeCardFormat = `
        <div class="card shadow p-3 mb-4 bg-body rounded" style="width: 24rem;">
        <div class="card-body" id="recipe${i}">
        <h2 class="card-title" style="margin-bottom: .25rem;">${recipe.name}</h2>
        <div id="tags${i}"></div>
        <h5 class="card-text">Ingredients</h5>
        <ul id="ingredients${i}"></ul>
        <h5 class="card-text">Directions</h5>
        <div id="directions${i}"></div>
        </div>
        </div>
        `
        // places the recipe card
        let recipeEl = document.createElement('div')
        recipeEl.setAttribute('class', 'col')
        recipeEl.innerHTML = recipeCardFormat
        mainContainer.appendChild(recipeEl)
    
        // places the tags
        let tagsEl = document.getElementById(`tags${i}`)
        recipe.tags.forEach( function(tag) {
            let color = '#E5E7E9'
            if (Object.keys(tagColors).includes(tag)) {
                color = tagColors[tag]
            }
            tagsEl.innerHTML += `<p class="btn btn-light" style="--bs-btn-padding-y: .1rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-bottom: .5rem; margin-right: .25rem; background-color: ${color}; border-color: ${color};">${tag}</p>`
        })
    
        // places the ingredients
        let ingredientsEl = document.getElementById(`ingredients${i}`)
        recipe.ingredients.forEach( function(ingredient) {
            ingredientsEl.innerHTML += `<li><p class="card-text">${ingredient}</p></li>`
        })
        // places the directions
        let directionsEl = document.getElementById(`directions${i}`)
        recipe.directions.forEach( function(direction) {
            directionsEl.innerHTML += `<p class="card-text" style="margin: 0; padding: 0;">${direction}</p>`
        })
    })
}

function clearRecipes() {
    let mainContainer = document.getElementById("mainContainer")
    mainContainer.innerHTML = ''
}

function resetRecipes() {
    placeRecipes(recipes)
}

placeRecipes(recipes)

let input = document.getElementById("searchInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchButton").click();
  }
});