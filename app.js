let gameSequence=[];
let userSequence=[];

let btns=["yellow","blue","red","green"]

let start=false;
let level=0;
let highscore=0;

let h2=document.querySelector("h2");



document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game started");
        start=true;

        levelUp();
    }
    
});



function btnFlash(ab){
   ab.classList.add("flash");
   setTimeout(function(){
    ab.classList.remove("flash");
   },300);//0.25sec
 }

 function userFlash(ab){
    ab.classList.add("userflash");
    setTimeout(function(){
     ab.classList.remove("userflash");
    },250);//0.25sec
  }

function levelUp(){
    userSequence=[];
    level++;
    if(level>highscore){
        highscore=level;
    }
    h2.innerText=`Level ${level}`;

    let indx=Math.floor(Math.random()*3);//will genreate rendom number between 0 to 3;
    let rndmClass=btns[indx];

    let randbtn=document.querySelector(`.${rndmClass}`);
    // console.log(indx);
    // console.log(rndmClass);
    // console.log(randbtn);

    gameSequence.push(rndmClass);
    console.log(gameSequence);

    btnFlash(randbtn);
}




let allBtns=document.querySelectorAll(".btn");
for(x of allBtns){
    x.addEventListener("click",btnPress);
}

function btnPress(){
    //console.log(this);
    userFlash(this);

   let userPressedBtn= this.getAttribute("id");
  // console.log(userPressedBtn);
   userSequence.push(userPressedBtn);

   check(userSequence.length-1);
} 

function check(idx){
    //console.log(level); //it is curent level and also length of both the array user and game sequence
    
    if(userSequence[idx] === gameSequence[idx]){
        if(userSequence.length ==gameSequence.length ){
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        
        h2.innerHTML=`Game over ! Your Score is <b>${level}.</b> <br>Your highest Score was ${highscore}. <br>Press any key to start.`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500);
        reset();
    }
}

function reset(){
    start=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}
