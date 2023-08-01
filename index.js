//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
    for(let i = 0; i < drink.length; i++){
        console.log(data.drinks[i])
        document.querySelector('h2').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[i].strInstructions
        document.querySelector('.one').innerText = data.drinks[i].strIngredient1
        document.querySelector('.two').innerText = data.drinks[i].strIngredient2
        document.querySelector('.three').innerText = data.drinks[i].strIngredient3
        document.querySelector('.four').innerText = data.drinks[i].strIngredient4
        document.querySelector('.five').innerText = data.drinks[i].strIngredient5
        document.querySelector('.six').innerText = data.drinks[i].strIngredient6
        document.querySelector('.seven').innerText = data.drinks[i].strIngredient7
        document.querySelector('.eight').innerText = data.drinks[i].strIngredient8
        document.querySelector('.nine').innerText = data.drinks[i].strIngredient9
        document.querySelector('.ten').innerText = data.drinks[i].strIngredient10
        document.querySelector('.eleven').innerText = data.drinks[i].strIngredient11
        document.querySelector('.twelve').innerText = data.drinks[i].strIngredient12
    }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}


        




