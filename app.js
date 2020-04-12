document.addEventListener('DOMContentLoaded',() => {

//card options
const cardArray = [

    {
        name: 'cardinals',
        img: 'images/cardinals.png'
    },  
    {
        name: 'dodgers',
        img: 'images/dodgers.png'
    },
    {
        name: 'marlins',
        img: 'images/marlins.png'
    },
    {
        name: 'mets',
        img: 'images/mets.png'
    },
    {
        name: 'redsox',
        img: 'images/redsox.png'
    },
    {
        name: 'yankees',
        img: 'images/yankees.png'
    },
    {
        name: 'cardinals',
        img: 'images/cardinals.png'
    },  
    {
        name: 'dodgers',
        img: 'images/dodgers.png'
    },
    {
        name: 'marlins',
        img: 'images/marlins.png'
    },
    {
        name: 'mets',
        img: 'images/mets.png'
    },
    {
        name: 'redsox',
        img: 'images/redsox.png'
    },
    {
        name: 'yankees',
        img: 'images/yankees.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create game board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
}

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    var optionOneId = cardsChosenId[0]
    var optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else  {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all'
    }
}


createBoard()

})