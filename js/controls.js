export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFire
}){

function reset(){
  /*buttonTree.classList.add('hide');
  buttonRain.classList.add('hide');
  buttonMarket.classList.add('hide');
  buttonFire.classList.add('hide');*/
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function play(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}
function pause() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

  return{
    reset,
    play, 
    pause,
  }
}