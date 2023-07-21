   let outputScreen = document.querySelector(".screen");


     function display(num){
      outputScreen.value += num;
     };

     function calculate(){
        try {
         outputScreen.value = eval(outputScreen.value);
        }
        catch(error)
        {
          alert("Invalid Input");
        }
     };

   function ALclear(){
      outputScreen.value = "";
   }



   function dlt(){
      outputScreen.value = outputScreen.value.slice(0, -1);
   };