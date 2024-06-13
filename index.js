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
            "Shake & Strain into a coupe"
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
            "Top Sprite"
        ],
        "directions": [
            "Shake & Pour into a tall glass"
        ]
    },
]

let seedCount = 2
let i = 0
let mainContainer = document.getElementById("mainContainer")
recipes.forEach( function(recipe) {
    let recipeCardFormat = `
    <div class="card shadow p-3 mb-4 bg-body rounded" style="width: 24rem;">
        <div class="card-body" id="recipe${i+seedCount}">
            <h2 class="card-title" style="margin-bottom: .25rem;">${recipe.name}</h2>
            <div id="tags${i+seedCount}"></div>
            <h5 class="card-text">Ingredients</h5>
            <ul id="ingredients${i+seedCount}"></ul>
            <h5 class="card-text">Directions</h5>
            <ul id="directions${i+seedCount}" style="list-style-type: none;"></ul>
        </div>
    </div>
    `
    // places the recipe card
    let recipeEl = document.createElement('div')
    recipeEl.setAttribute('class', 'col')
    recipeEl.innerHTML = recipeCardFormat
    mainContainer.appendChild(recipeEl)

    // places the tags
    let tagsEl = document.getElementById(`tags${i+seedCount}`)
    recipe.tags.forEach( function(tag) {
        tagsEl.innerHTML += `<p class="btn btn-secondary" style="--bs-btn-padding-y: .1rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-bottom: .5rem; margin-right: .25rem;">${tag}</p>`
    })

    // places the ingredients
    let ingredientsEl = document.getElementById(`ingredients${i+seedCount}`)
    recipe.ingredients.forEach( function(ingredient) {
        ingredientsEl.innerHTML += `<li><p class="card-text">${ingredient}</p></li>`
    })
    // places the directions
    let directionsEl = document.getElementById(`directions${i+seedCount}`)
    recipe.directions.forEach( function(direction) {
        directionsEl.innerHTML += `<li><p class="card-text">${direction}</p></li>`
    })
    i += 1
})