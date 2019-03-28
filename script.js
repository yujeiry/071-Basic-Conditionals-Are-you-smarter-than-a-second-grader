

// 1. English Section:
$(".englishButton").click(function(){
    var englishInput = $(".english").val();
    if ( englishInput=== "mon"){
    
    // display this text if the answer is correct
    $(".englishMessage").text("Correct!");
}else{
        
    // display this text if the answer is incorrect
    $(".englishMessage").text("Wrong! Try again."); 
    
} 
});




// 2. Social Studies section
$(".ssButton").click(function(){
    var ssInput = $(".socialStudies").val();
     if ( ssInput=== "albany"){
         
     // display this text if the answer is correct
    $(".ssMessage").text("Correct!");    
    
     }else{
        
    // display this text if the answer is incorrect
    $(".ssMessage").text("Wrong! Try again."); 
    
} 
        

    
});


// 3. Math section
$(".mathButton").click(function(){
    var mathInput = $(".math").val();
     if ( mathInput=== "30"){
         
     // display this text if the answer is correct
    $(".mathMessage").text("Correct!");    
    
     }else{
        
    // display this text if the answer is incorrect
    $(".mathMessage").text("Wrong! Try again."); 
    
} 
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number
  

});


// 4. Science section
$(".scienceButton").click(function(){
    var scienceInput = $(".science").val();
    if ( scienceInput=== "solid"){
         
     // display this text if the answer is correct
    $(".scienceMessage").text("Correct!");    
    
     }else{
        
    // display this text if the answer is incorrect
    $(".scienceMessage").text("Wrong! Try again."); 
    
} 
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number
  

    });
  

