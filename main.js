//display name

function user(){
    var user  = prompt("What is your name?", "Type your name");
    if (user == null || user == ""){
        document.getElementById("user").innerHTML = "No Name";
    } 
    else{
       document.getElementById("user").innerHTML = (user);
    
    }
    }
    
    // sum and product
    
    function Operation(){
     var a = parseInt(prompt("Input some number"));
     var b = parseInt(prompt("Input some number"));
     var c = parseInt(prompt("Input some number"));
     var d = a + b + c;
     var f = a * b * c;
    
    if (a == null || a == ""){
       console.log(a);
    }
    if(b == null || b == ""){
        console.log(b);
    }
    
    if(c == null || c == ""){
        console.log(c);
    }
    
    else{
        document.getElementById("a").innerHTML = (a);
        document.getElementById("b").innerHTML = (b);
        document.getElementById("c").innerHTML = (c);
        document.getElementById("ansA").innerHTML = (d);
        document.getElementById("ansB").innerHTML = (f);
        
    }
    }
    
    
    
    // calculate football team
    function calculateWin(){
    var a =  parseInt(prompt("Number of wins", "Input some number"));
    var b = 3;
    var in_win = a * b;
    
    if(in_win == null || in_win == ""){
        document.getElementById("win").innerHTML = "Invalid";
    }
    else{
        document.getElementById("win").innerHTML = (in_win);
    }
    }
    
    function calculateDraw(){
    var a =  parseInt(prompt("Number of wins", "Input some number"));
    var b = 1;
    var in_draw = a * b;
    
    if(in_draw == null || in_draw == ""){
        document.getElementById("draw").innerHTML = "Invalid";
    }
    else{
        document.getElementById("draw").innerHTML = (in_draw);
    }
    }
    
    function calculateLoss(){
    var in_loss =  parseInt(prompt("Number of wins", "Input some number"));
    
    if(in_loss == null || in_loss == ""){
        document.getElementById("loss").innerHTML = "Invalid";
    }
    else{
        document.getElementById("loss").innerHTML = (in_loss);
    }
    }
    
    // reset
    function reset(){
        document.getElementById("a").innerHTML = "";
        document.getElementById("b").innerHTML = "";
        document.getElementById("c").innerHTML = "";
        document.getElementById("user").innerHTML = "";
        document.getElementById("ansA").innerHTML = "";
        document.getElementById("ansB").innerHTML = "";
    
    }
    
    function resetPoints(){
        document.getElementById("win").innerHTML = "";
        document.getElementById("draw").innerHTML = "";
        document.getElementById("loss").innerHTML = "";
    }
    