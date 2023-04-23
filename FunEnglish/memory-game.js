document.querySelector(".control-buttons").onclick = function(){
    document.querySelector(".control-buttons").remove();
};

//The classes
const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container');
const score = document.querySelector('.score span');
const tries = document.querySelector('.tries span');


//______________________________________________________


suffle();
clicking();


// Shuffle Function ____________________________________
function suffle(){
    card.forEach(c=>{
        const num = Array.from(Array(card.length).keys())
        const random = Math.floor(Math.random()*card.length)
        c.style.order = num[random]
    })
}
//______________________________________________________

// clicking Function ___________________________________
function clicking(){

    for(let i =0; i<card.length; i++){
        front[i].classList.add('show')
        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);
        card[i].addEventListener('click' ,()=>{
            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')
            if(filppedCard.length == 2){
                container.style.pointerEvents ='none'            
                setInterval(() => {                   
                    container.style.pointerEvents ='all'
                }, 1000);
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}
//______________________________________________________


// match Function ______________________________________
function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){
        score.innerHTML = parseInt(score.innerHTML) + 1
        setTimeout(() => {
        if(score == 13){
          win();
        }
      })
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 

        cardOne.classList.add('match')
        cardTwo.classList.add('match')

    }else{
      
      tries.innerHTML = parseInt(tries.innerHTML) + 1
      setTimeout(() => { // if two card not matched

    }, 400);

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}
//______________________________________________________

