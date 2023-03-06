let userPaddle = document.querySelector('#user-paddle')
let compPaddle = document.querySelector('#comp-paddle')
let ball = document.querySelector('#ball')

userPaddle.style.marginLeft = '30px'
userPaddle.style.marginTop = '0px'
compPaddle.style.marginLeft = '1048px'
compPaddle.style.marginTop = '0px'

let W_Pressed = false
let S_Pressed = false

document.addEventListener('keydown', (e)=>{
  if(e.keyCode=='87'){
    W_Pressed = true
  }
})

document.addEventListener('keyup', (e)=>{
  if(e.keyCode=='87'){
    W_Pressed = true
  }
})

gameLoop()

function gameLoop(){
  setTimeout(() => {
    setInterval(() => {
      timeout
    }, 5);
    
  }, 500);
}

function marginTop(elem){
  return Number(elem.style.marginTop.split('p')[0])
}

function marginLeft(elem){
  return Number(elem.style.maraginLeft.split('p'[0]))
}

