function setup() {

    createCanvas(880, 620);
    strokeWeight(8);
    
}

function draw() {

    var dark  = "#001A33";

    background(dark );    //Dark blue color
            
    fill(255, 173, 1);     //Mustard color            
    ellipse(132, 82, 200, 200);
    
    fill(88, 24, 69); //Pompadour color
    ellipse(690, 118, 350, 350);
   
    fill(220, 20, 60) // Crimson color
    ellipse(300, 400, 500, 500);
    
    fill(255, 87, 51);     //Outrageous orange color            
    ellipse(700, 440, 270, 270);


    line(140, 40, 200,80); 
    line(200, 40, 260, 80); 
    line(260, 40, 320, 80); 
    
    fill(114, 3, 27);     //Burgundy color            
    rect(372, 62, mouseX, mouseY);

    
}

