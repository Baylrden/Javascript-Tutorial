// anonymous objects = Objects without a name
//   Not directly referenced
//   Less syntax. No need for unique names

class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}

/* INSTEAD OF THIS:
let card1 = new Card("A","Hearts");
let card2 = new Card("A","Diamonds");
let card3 = new Card("A","Spades");
let card4 = new Card("4","Clubs");
let card5 = new Card("5","Hearts");
let card6 = new Card("6","Spades");
*/

//WE WILL USE THIS:

let cards = [
 new Card("A","Hearts"),
 new Card("A","Diamonds"),
 new Card("A","Spades"),
 new Card("4","Clubs"),
 new Card("5","Hearts"),
 new Card("6","Spades"),

]

//console.log(cards[0].value +" "+ cards[0].suit);

cards.forEach(card => console.log(`${card.value} ${card.suit}`));