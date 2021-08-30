

function filterFunction() {
    var input, filter, cards, cardContainer, title;
    input = document.querySelector('#input');
    filter = input.value.toUpperCase();
    cardContainer = document.querySelector('.box');
    cards = cardContainer.querySelectorAll('.card');
    console.log(cards)
    for (let i = 0; i < cards.length; i++) {
        title = cards[i].querySelector('.card-body h3.card-title');
        if(title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        }else {
            cards[i].style.display = "none";
        }
    }
}


