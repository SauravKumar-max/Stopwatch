const startBtn = document.querySelector(".watch");
const lapBtn = document.querySelector(".show");
const minTime = document.querySelector(".minutes");
const secTime = document.querySelector(".seconds");
const hunTime = document.querySelector(".hundreds");
const lapses = document.querySelector(".lapses");

let i = 0;
let j = 0;
let k = 0;
let array = [];

function minutes() {
        k++;
          if(k == 60){
            k = 0;
          } 
           
          if(k.toString().length == 1){
             minTime.textContent = "0"+k;
           }
           else{
            minTime.textContent = k;
            }
}

function seconds(){
  i++;
      if(i == 60){
          i = 0;
          minutes();
      }  
 
       if(i.toString().length == 1){
            secTime.textContent = "0"+i;
         }
          else{
            secTime.textContent = i;
         }
}

function time(){
  j++
   
   if(j == 100){
      j=0;
       seconds();
       } 
     
      
         if(j.toString().length == 1){
            hunTime.textContent = "0"+j;
          }
          else{
             hunTime.textContent = j;
           }
}




const stopWatch = () => {
   if(startBtn.classList.contains('start')){
    a = setInterval(time, 10);
    
    startBtn.classList.remove('start');
    startBtn.classList.add('stop');
    startBtn.textContent = 'Stop';
    lapBtn.classList.remove('reset');
    lapBtn.classList.add('lap');
    lapBtn.textContent = 'Lap';
   } else{
     
     clearInterval(a);
    
     startBtn.classList.remove('stop');
     startBtn.classList.add('start');
     startBtn.textContent = "Start";
     lapBtn.classList.remove('lap');
     lapBtn.classList.add('reset');
     lapBtn.textContent = "Reset";     
   }
}



function literallyStop() {
  if(lapBtn.classList.contains('lap')){
    let object = {};
    object.i = secTime.textContent;
    object.j = hunTime.textContent;
    object.k = minTime.textContent;
    array.push(object);
    let jsxArray = array.map(items => `<p>${items.k}:${items.i}.${items.j}</p>`)
    joinArray = jsxArray.join('');
    lapses.innerHTML= joinArray;
                        
  } else{
     i=0;
     j=0;
     k=0;
     
     minTime.textContent = "00";
     hunTime.textContent = "00";
     secTime.textContent = "00";
     array = [];
     lapses.innerHTML = "";
     lapBtn.innerHTML = "Lap";
    }
  
  
}


lapBtn.addEventListener('click', literallyStop)
startBtn.addEventListener('click', stopWatch);