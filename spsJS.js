console.log("execute")



let notifyblur=document.getElementById('notifyblur')

let hs=0
let total=0
let totalhp=10
let name=document.getElementById('name')
let highscore=document.getElementById('highscore')
let score=document.getElementById('score')
let hp=document.getElementById('hp')
let playervalue=document.getElementById('playervalue')
let computervalue=document.getElementById('computervalue')
let cssplayer=document.getElementById('cssplayervalue')
let csscomputer=document.getElementById('comvalue')
let result=document.getElementById('result')
let ovscore=document.getElementById('overscore')
let notify=document.getElementById('notify')
let blocking=document.getElementById('blocking')
let body=document.getElementsByTagName('body')
let ovhs=document.getElementById('overhs')


hp.textContent='HP : '+totalhp




window.onload=()=>{
    // localStorage.getItem('HIGHSCORE',hs)
    // console.log('loading...')
    
   hsn=localStorage.getItem('HIGHSCORE',hs)
   h=hsn
  hs=+h
  highscore.textContent='HighScore:'+hs ;
}



function reset(){
    total=0
    totalhp=10
    hp.textContent='HP : '+totalhp
    score.textContent='score :' +' '+ +total
    console.log("reset")
    notify.style.marginTop='-1000%'
    notifyblur.style.display='none'
    result.textContent=' '
    playervalue.textContent=' '
    computervalue.textContent=' '
    cssplayer.style.display='none'
     csscomputer.style.display='none'
     hp.style.color='green' 
     score.style.color='yellow'
    
}
function closer(){
    reset()
    blocking.style.bottom='0px'
    notifyblur.style.display='block'
    
}
function tryagain(){
   reset()
   console.log("ok")
}

function start(){
    blocking.style.bottom='1000px'
    notifyblur.style.display='none'
    
}


function btnclick(event){
     playervalue.textContent=event.target.textContent
     playerval=playervalue.textContent
    

     cssplayer.style.display='block'
     csscomputer.style.display='block'
     
     let val=Math.floor(Math.random()*3)
    let comarr=['rock','paper','scissor']
    compval=comarr[val]
    computervalue.textContent=compval
    
    game(compval,playerval)
    
    
    

}




function game(compval,playerval){
    player=playerval
    computer=compval

    resultvalue= 
    player===computer ?"tie!":
    player==="rock" && computer==="paper"?"you lose!":
    player==="rock" && computer==="scissor"?"you won!":
    player==="paper" && computer==="scissor"?"you lose!":
    player==="paper" && computer==="rock"?"you won!":
    player==="scissor" && computer==="rock"?"you lose!":
    player==="scissor" && computer==="paper"?"you won!":"";
    result.textContent=resultvalue

    

    if(resultvalue==="you lose!"){
        result.style.color='red'
        totalhp=totalhp-1
        hp.textContent='HP : '+totalhp
        ovhp=totalhp;
        if(ovhp<=5){
            hp.style.color='red'
        }
        else{
            hp.style.color='green' 
        }
        

        if(ovhp===0){
            notify.style.marginTop='70%'
            notifyblur.style.display='block'
            console.log("no")
            
        }
    
    }
    
        

     
     else if(resultvalue==="you won!"){
         result.style.color='green'
        total=total+1
        score.textContent='score :' +' '+ +total
        if(hs===total){ 
            score.style.color=' rgb(0, 255, 60)'
             ovhs.style.display='block'
             ovscore.style.margin='8px'
        } 
        ovscore.textContent='score :' +' '+ +total
       
        
        
        if(hs<total){
           hs=hs+1
        
           
        };
        highscore.textContent='HighScore:'+hs ;
        ovhs.textContent='your HighScore :' +' '+ +hs
        
        
     }
     else{
        result.style.color='yellow'
     }

     localStorage.setItem('HIGHSCORE',hs)
  
    
}





