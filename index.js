function toggleGo (event){
   
  const goLight = document.querySelector('#goLight')
  const buttonText = event.target.innerText
  if( goLight.value === 'on'){
    console.log(`${buttonText} light is off`)
    goLight.value = 'off'
    goLight.style.backgroundColor = 'black'
 }else{
    console.log(`${buttonText} light is on`)
    goLight.value = 'on'
    goLight.style.backgroundColor = 'green'
 }
}

function toggleStop(event){
 
 const stopLight = document.querySelector('#stopLight')
 const buttonText = event.target.innerText
 if( stopLight.value === 'on'){
    console.log(`${buttonText} light is off`)
    stopLight.value = 'off'
    stopLight.style.backgroundColor = 'black'
}else{  
    console.log(`${buttonText} light is on`)
    stopLight.value = 'on'
    stopLight.style.backgroundColor = 'red'
}
}

function toggleSlow(event){
 const slowLight = document.querySelector('#slowLight')
 const buttonText = event.target.innerText
 if( slowLight.value === 'on'){
    console.log(`${buttonText} light is off`)
    slowLight.value = 'off'
    slowLight.style.backgroundColor = 'black'
}else{
    console.log(`${buttonText} light is on`)
    slowLight.value = 'on'
    slowLight.style.backgroundColor = 'orange'
}
}


function onClick (event){ 
       const buttonPressed = event.target
   if(buttonPressed.id === 'stopButton'){
       toggleStop(event)
   }else if(buttonPressed.id === 'goButton'){
       toggleGo(event)
   }else if(buttonPressed.id === 'slowButton'){
       toggleSlow(event)
   }
}

function onHover (event) {
 const element = event.target
 const eventType = event.type
 if(eventType === 'mouseenter'){
   console.log(`Entered ${element.innerText} button`)
 }else{
   console.log(`Left ${element.innerText} button`)
 }

}



const controls = document.querySelector('#controls')
const buttons = document.querySelectorAll('.button')
console.log(buttons)

controls.addEventListener('click', onClick)

buttons.forEach(function(elem){
  
  elem.addEventListener('mouseenter', onHover)
  elem.addEventListener('mouseleave', onHover)
 })

 