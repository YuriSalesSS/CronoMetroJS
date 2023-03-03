
  
    var segundos = 00; 
    var milesimos = 00; 
    var appendMilesimos = document.getElementById('milesimos')
    var appendSegundos = document.getElementById('segundos')
    var botaoStart = document.getElementById('botao-start');
    var botaoStop = document.getElementById('botao-stop');
    var botaoReset = document.getElementById('botao-reset');
    var Interval ;
  
    botaoStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(iniciaContador, 10);
    }
    
      botaoStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    botaoReset.onclick = function() {
       clearInterval(Interval);
      milesimos = "00";
        segundos = "00";
      appendMilesimos.innerHTML = milesimos;
        appendSegundos.innerHTML = segundos;
    }
    
     
    
    function iniciaContador () {
      milesimos++; 
      
      if(milesimos <= 9){
        appendMilesimos.innerHTML = "0" + milesimos;
      }
      
      if (milesimos > 9){
        appendMilesimos.innerHTML = milesimos;
        
      } 
      
      if (milesimos > 99) {
        console.log("segundos");
        segundos++;
        appendSegundos.innerHTML = "0" + segundos;
        milesimos = 0;
        appendmilesimos.innerHTML = "0" + 0;
      }
      
      if (segundos > 9){
        appendSegundos.innerHTML = segundos;
      }
    
    }
    
  
  
