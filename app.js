// randomly select Cards and Suit
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
 
}




function Buildcard(){


  // Pick a suit
const suits = ['♦','♥','♠','♣']




// Pick card value from following: 1 to 10, King, Queen, Jack or Ace, (no joker)
const Cardnumber = ['A',1,2,3,4,5,6,7,8,9,10,'K','Q','J'];



// Randomly select Card Value
const CardIndex = getRandomArbitrary(0,Cardnumber.length-1);
const theCardValue = Cardnumber[CardIndex];

// Randomly select Suit 
const SuitIndex = getRandomArbitrary(0,suits.length-1)
const theSuitValue = suits[SuitIndex];




// Link HTML
const SuitSlot = document.getElementById('RandomSuit');
const SuitSlot1 = document.getElementById('RandomSuit1');
const CardValueSlot = document.getElementById('RandomCardValue');

//  Change Text Color
if(SuitIndex <= 1){
  SuitSlot.style.color = 'red';
     SuitSlot1.style.color = 'red';
     CardValueSlot.style.color = 'red';
 }else{
  SuitSlot.style.color = 'black';
  SuitSlot1.style.color = 'black';
  CardValueSlot.style.color = 'black';
 }


// import Function 
SuitSlot.innerHTML = theSuitValue;
SuitSlot1.innerHTML = theSuitValue;
CardValueSlot.innerHTML = theCardValue;

}



