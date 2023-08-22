function btnpressed (e){
   var container = document.getElementById('display');
    container.value += e.innerText
  
  console.log("btn pressed");
console.log('element',e);


}




 function equval(){
var display = document.getElementById('display')
  display.value = eval(display.value);
      

 }
 function calculator (){
   document.getElementById('display').value =document.getElementById('display').value.slice(0,-1) ;
   
 }

function name() {
   
  document.getElementById('display').value = document.getElementById('display').value.clear("");
 
  }






 


  
 
  
    
 
    


