let size = 2500;
let mergedSpiral = [].concat.apply([], createSpiral()); // merges the arrays of createSpiral
let mergedLeftUp = [].concat.apply([], createLeftUp()); // merges the arrays of createSpiral

function createDivsLinear() {
    for (let i = 0; i <= size-1; i++) {         //loop to cycle "size" times
        //Linear Stroke
        let div2 = document.createElement('div');  // create a new div element
        div2.setAttribute("id", `linear`+(i+1));          // add id to the new div 
        document.getElementById("linear").appendChild(div2);          // add the newly created element  to the DOM
        //Linear Color
        let div3 = document.createElement('div');  // create a new div element
        div3.setAttribute("id", `linearCol`+(i+1));  // add id to the new div 
        document.getElementById("linearCol").appendChild(div3); // add the newly created element  to the DOM
    }
}

function createDivsSpiral() {
    for (let i = 0; i <= size-1; i++) {           //loop to cycle "size" times
        //spiral Strokes
        let div2= document.createElement('div');    // create a new div element
        div2.setAttribute("id", `spiral`+mergedSpiral[i]);  // add id to the new div 
        document.getElementById("spiral").appendChild(div2);          // add the newly created element  to the DOM
        //spiralColor
        let div3 = document.createElement('div');  // create a new div element
        div3.setAttribute("id", `spiralCol`+mergedSpiral[i]);  // add id to the new div 
        document.getElementById("spiralCol").appendChild(div3); // add the newly created element to the DOM
    }
}


function createDivsLeftUp() {
    for (let i = 0; i <= size-1; i++) {           //loop to cycle "size" times
        //spiral Strokes
        let div2= document.createElement('div');    // create a new div element
        div2.setAttribute("id", `leftUp`+mergedLeftUp[i]);  // add id to the new div 
        document.getElementById("leftUp").appendChild(div2);          // add the newly created element  to the DOM
        //spiralColor
        let div3 = document.createElement('div');  // create a new div element
        div3.setAttribute("id", `leftUpCol`+mergedLeftUp[i]);  // add id to the new div 
        document.getElementById("leftUpCol").appendChild(div3); // add the newly created element to the DOM
    }
}

function addClass() {
    let stroke;
    let bgColor;
    let offset = -2;                        // to offsetts the probalility over time
    for (let i = 0; i <= size-1; i++) {       //cycles through all the divs
        let randomNumber = (Math.random() * 3);    //generates random number between 0-2.99

        //_____________________________________ possible cases
        if (randomNumber>=(2-offset)) {
            stroke = `empty`;
            bgColor = "white";                    
        } else if (randomNumber>1-(offset/8) && randomNumber<=2-(offset/8)) {
            stroke = `bottom`;
            bgColor = "darkgrey";                    
        } else if (randomNumber<=1){                      
            stroke = `right`;
            bgColor = "black";                    
        }
        //_____________________________________ possible cases

        offset += 0.00125;                       // raises the probalility of empty over time

        document.getElementById((`leftUpCol`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`leftUpCol`+(i+1))).style.backgroundColor =`${bgColor}`; //adds greyscale background color
        document.getElementById((`spiralCol`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`spiralCol`+(i+1))).style.backgroundColor =`${bgColor}`; //adds greyscale background color
        document.getElementById((`linearCol`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`linearCol`+(i+1))).style.backgroundColor =`${bgColor}`;  //adds greyscale background color
        document.getElementById((`linear`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`linear`+(i+1))).classList.add(`${stroke}`); // adds the generated vertical, horizontal or null stroke
        document.getElementById((`spiral`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`spiral`+(i+1))).classList.add(`${stroke}`); // adds the generated vertical, horizontal or null stroke
        document.getElementById((`leftUp`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`leftUp`+(i+1))).classList.add(`${stroke}`); // adds the generated vertical, horizontal or null stroke
        
    }
}

function createSpiral(size){
    size = 50;
    let spiralArray = [];
    
    for (let i = 0; i < size; i++) {
        spiralArray[i] = Array(size)
    }

    let topEdge = 0;
    let bottomEdge = (size-1);
    let leftEdge = 0;
    let rightEdge = (size-1);
    let counter = 1;
    let direction = 'LEFT';
    let x = 0;
    let y = 0;

    while (topEdge <= bottomEdge && leftEdge <= rightEdge) {
        if (direction === "LEFT" && x <= rightEdge) {
            spiralArray[y][x++] = counter++;
        } else if (direction === "LEFT" && x > rightEdge) {
            direction = "DOWN";
            x = rightEdge;
            y = ++topEdge;
        } else if (direction === 'DOWN' && y <= bottomEdge) {
            spiralArray[y++][x] = counter++;
        } else if (direction === 'DOWN' && y > bottomEdge) {
            direction = 'RIGHT';
            x = --rightEdge;
            y = bottomEdge;
        } else if (direction === 'RIGHT' && x >= leftEdge) {
            spiralArray[y][x--] = counter++;
        } else if (direction === 'RIGHT' && x < leftEdge) {
            direction = 'UP';
            x = leftEdge;
            y = --bottomEdge;
        }  else if (direction === 'UP' && y >= topEdge) {
            spiralArray[y--][x] = counter++;
        } else if (direction === 'UP' && y < topEdge) {
            direction = 'LEFT';
            x = ++leftEdge;
            y = topEdge;
        }
    }
    return spiralArray;
}

function createLeftUp() {

    var shiftCounter = [];
    var leftUpArray =[];
    let counter=1;
    let size= 50;
    
    //create emtpy array
    for (let y = 0; y < size; y++) {
        leftUpArray [y] = new Array(size);
    }
    //------------------
    

    
    //create counter utility array
    for (var s = 1; s <= size; s++) {
        shiftCounter.push(s);
    }
    for (var s = size; s >= 1; s--) {
        shiftCounter.push(s);
    }
    //----------------------------

    //set first cell value
    leftUpArray[0][0]=1;
    //------------------
    
    //fill in first colunm values
    for (let y = 1; y < size; y++) {
        leftUpArray[y][0]= parseInt(leftUpArray[y-1][0])+counter;
        ++counter;
    }
    counter = 0;
    //----------------------------
    
    
    //fill in cell values
    for (let y = 0; y < size; y++) {
        for (let x = 1; x < size; x++) {
            leftUpArray[y][x]= parseInt(leftUpArray[y][x-1])+shiftCounter[x+y];
            };
        }
    //----------------------------
    return leftUpArray;
    }

createDivsLeftUp();
createDivsLinear();
createDivsSpiral();
addClass();
