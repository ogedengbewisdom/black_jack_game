
let card = []
let sum = 0
let message = ""
let messageEl = document.getElementById("message")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let isAlive = false
let hasBlackJack = false


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
card = [firstCard, secondCard]
 sum = card[0] + card[1]

 renderGame()

}



function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if(sum < 21) {
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
   
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {

        let newCard = getRandomCard()
        sum += newCard
        card.push(newCard)
        renderGame()
    }  
}

