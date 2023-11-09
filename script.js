function cardGame(){
let boxes = document.querySelector(".boxes");
let play_1 = document.querySelector('.play-1')
let play_2 = document.querySelector('.play-2')
let newGame = document.querySelector('.newGame')
let ans = document.querySelector('.ans')
let btn_1 = document.querySelector(".btn-1")
let btn_2 = document.querySelector(".btn-2")
btn_1.style.backgroundColor = 'cyan'
ans.innerHTML = 'Player 1 Turn';
boxes.innerHTML = ''

let myArr = ['🐒', '🐒', '🐇', '🐇', '🐫', '🐫',  '🐀', '🐀', '🐕', '🐕', '🦔', '🦔','🐲','🐲','🐸','🐸'];


myArr.forEach((el) =>{
    boxes.innerHTML += `
    <div class="box">
    <div class="front">?</div>
    <div class="back"></div>
</div>`
})
let front = document.querySelectorAll('.front');
let back = document.querySelectorAll(".back")
let box = document.querySelectorAll(".box")

let pushImg = []
let randomGen = []
box.forEach((el, indx) => {
    randomGen = myArr.sort(() => Math.random() - 0.5)

    el.addEventListener("click", (event) => {
        
    
        el.classList.toggle('toggle')
        
        setRandom(randomGen);

        checkImg(randomGen, indx, el);

    })

})



let p1 = 0;
let p2 = 0;
let cnt = 0;


let preClass = [];
function checkImg(randomGen, indx, el) {
    pushImg.push(randomGen[indx])
    preClass.push(el)
    if (pushImg.length == 2) {
        cnt++;
        
        changePlayer(cnt)


        if (pushImg[0] !== pushImg[1]) {
            setTimeout(() => {
                preClass[0].classList.toggle('toggle');
                el.classList.toggle('toggle')
                preClass = [];
                pushImg = [];
            }, 700)
            

        }
        else {
            preClass[0].style.pointerEvents = 'none'
            el.style.pointerEvents = 'none'
            preClass = [];
            pushImg = [];
            cnt = cnt - 1;
            changePlayer(cnt)  
            setValue(cnt);   
        }
       
    }
    
}

function changePlayer(cnt){
    if(cnt%2 == 0){
btn_2.style.backgroundColor = 'transparent'
btn_1.style.backgroundColor = 'cyan'
ans.innerHTML = 'Player 1 Turn';


    }
    else{
btn_2.style.backgroundColor = 'cyan'
btn_1.style.backgroundColor = 'transparent'
ans.innerHTML = 'Player 2 Turn';

    }
}
function setValue(cnt){
if(cnt%2 == 0){
//p1
play_1.innerHTML = `${++p1}`
}
else{
play_2.innerHTML = `${++p2}`

}
if(p1+p2 == 8){
    endGame();
}
}

function endGame(){
   setTimeout(() => {
    if(p1 > p2){

        newGame.innerHTML = `<button class='rest'>Restart</button>`
        ans.innerHTML = `<div>Player 1 is Won Total Point is ${p1}</div>`
        newGame.style.justifyContent = 'center'
        newGame.style.margin = '2px auto'
       

    }
    else if(p1 == p2){
        newGame.innerHTML = `<button class='rest'>Restart</button>`
        ans.innerHTML = `<div>Match Draw With Total Point ${p1}</div>`
        newGame.style.justifyContent = 'center'
        newGame.style.margin = '2px auto'
    }
    else{
        newGame.innerHTML = `<button class='rest'>Restart</button>`
        ans.innerHTML = `<div>Player 2 is Won Total Point is ${p2}</div>`
        newGame.style.justifyContent = 'center'
        newGame.style.margin = '2px auto'
       


       
    }
   }, 1000);
   setTimeout(() => {
    let rest = document.querySelector('.rest')
    rest.addEventListener('click',() =>{
       box.forEach((el) =>{
        el.classList.remove('toggle')
       })
       restartGame();
    })
   }, 1000);
   
}

function restartGame(){
    newGame.innerHTML = '';
    newGame.innerHTML = `
    <div class="player-1"> <button class="btn-1">Player 1</button><div class="play-1">0</div> </div> 
    <div class="player-2"> <button class="btn-2">Player 2</button><div class="play-2">0</div> </div>`
    ans.innerHTML = ''
    cardGame();
}




function setRandom(randomGen) {
    back.forEach((ele, indx) => {
        ele.innerHTML = `${randomGen[indx]}`
    })


}

back.forEach((el) => {
 el.addEventListener('click', (event) =>{
    event.stopPropagation();
 })
})





}
cardGame();
