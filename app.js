// getting the player's name

let namePlayer1 = window.prompt('Please! Enter your name, player 1 ')
let namePlayer2 = window.prompt('Please! Enter your name, player 2 ')


// Checking if the user has digited something 

if (namePlayer1.length > 0 && namePlayer2.length > 0) {
    // Writing the player's name in the html
    document.querySelectorAll('.container  .dice  h2')[0].innerHTML = namePlayer1

    document.querySelectorAll('.container  .dice  h2')[1].innerHTML = namePlayer2
}


// creating a function to roll the dice

function roll() {
    document.querySelector('.container .btn_roll h2').style.visibility = 'hidden'
    document.querySelectorAll('h3')[0].style.visibility = 'hidden'
    document.querySelectorAll('h3')[1].style.visibility = 'hidden'

    // Getting a radoom side dice - player1

    let randomNumber1 = Math.floor(Math.random() * 6 + 1)

    let randomDiceImage1 = "dice" + randomNumber1 + ".png" // dice2.png

    let randomImageSource1 = "images/" + randomDiceImage1 // img/dice2.png

    let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1)


    // Getting a radoom side dice - player2

    let randomNumber2 = Math.floor(Math.random() * 6 + 1)

    let randomDiceImage2 = "dice" + randomNumber2 + ".png" // dice2.png

    let randomImageSource2 = "images/" + randomDiceImage2 // img/dice2.png

    let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

    // Condition winner

    // if player1 number is greater than player2 number. Player1 won

    if (randomNumber1 > randomNumber2) {

        document.querySelectorAll('h3')[0].style.color = 'green'
        document.querySelectorAll('h3')[0].style.visibility = 'visible'
        document.querySelectorAll('h3')[0].innerHTML = namePlayer1 + ' has won'
        document.querySelectorAll('h3')[1].style.color = 'red'
        document.querySelectorAll('h3')[1].innerHTML = namePlayer2 + ' has lost'
        document.querySelectorAll('h3')[1].style.visibility = 'visible'

    }
    // if player2 number is greater than player1 number. Player2 won
    else if (randomNumber2 > randomNumber1) {

        document.querySelectorAll('h3')[1].style.color = 'green'
        document.querySelectorAll('h3')[1].style.visibility = 'visible'
        document.querySelectorAll('h3')[1].innerHTML = namePlayer2 + ' has won'
        document.querySelectorAll('h3')[0].style.color = 'red'
        document.querySelectorAll('h3')[0].innerHTML = namePlayer1 + ' has lost'
        document.querySelectorAll('h3')[0].style.visibility = 'visible'
    }
    // if player1 number is equals player2 number. Draw
    else if (randomNumber1 == randomNumber2) {
        document.querySelector('.container .btn_roll h2').style.visibility = 'visible'
    }
}