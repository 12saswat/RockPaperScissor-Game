let yourScr=0;
let autoScr=0;

                                 //Selecting the Choices

let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const yrScrB=document.querySelector("#yourScr");
const autoScrB=document.querySelector("#autoScr");

choice.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChos=choice.getAttribute("id");
     playGm(userChos);
    });
});

                      
                              //Main game logic

const playGm = (userChos) =>{
console.log(`user choice ${userChos}`);
const autoChos=getautoChos();
console.log(`Auto choice ${autoChos}`);

if(userChos === autoChos){
    drawMatch();
}
else{
    let userWin=true;
    if(userChos === "rock"){
        userWin = autoChos === "paper" ? false : true;
       
    }
    else if(userChos === "paper"){
        userWin = autoChos === "scissor" ? false : true;
    }
    else{
        userWin = autoChos === "rock" ? false : true;
        }
        showWnr(userWin , userChos, autoChos);
}
}

                     //Function for show messages for win , lose or draw

const showWnr= (userWin, userChos, autoChos) =>{
    if(userWin){
        yourScr++;
        yrScrB.innerText=yourScr;
    msg.innerText=`You win ${userChos} beats ${autoChos}`;
     msg.style.backgroundColor="green";
    

    }
    else{
      autoScr++;
      autoScrB.innerText=autoScr;
        msg.innerText=`Sorry ${autoChos} beats ${userChos}`;
        msg.style.backgroundColor="red";
    }
} ;

const drawMatch=()=>{  
    msg.innerText="Let's Play agin, Match is draw";
    msg.style.backgroundColor="black";
}

                               //Auto generating the choices

const getautoChos =()=>{
  const options=["rock","paper","secissor"];              
  let randomIndx=Math.floor(Math.random()*3);
  return options[randomIndx];

}