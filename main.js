let size = 2500;
let merged = [].concat.apply([], createSpiral()); // merges the arrays of createSpiral

function createDivsLinear() {
    for (let i = 0; i <= size-1; i++) {         //loop to cycle "size" times

        //Linear Numbers
        let div1 = document.createElement('div');  // create a new div element
        div1.setAttribute("id", `linearNum`+(i+1));  // add id to the new div 
        let DivNumber = document.createTextNode(`${i+1}`);  // declare number to be put in the div
        div1.appendChild(DivNumber); // add numbers to div
        document.getElementById("linearNum").appendChild(div1); // add the newly created element  to the DOM
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
        //spiralNumbers
        let div1= document.createElement('div');    // create a new div element
        div1.setAttribute("id", `spiralNum`+ merged[i]);          // add id to the new div
        let DivNumber = document.createTextNode(merged[i]); 
        div1.appendChild(DivNumber);
        document.getElementById("spiralNum").appendChild(div1);          // add the newly created element
        //spiral Strokes
        let div2= document.createElement('div');    // create a new div element
        div2.setAttribute("id", `spiral`+merged[i]);  // add id to the new div 
        document.getElementById("spiral").appendChild(div2);          // add the newly created element  to the DOM
        //spiralColor
        let div3 = document.createElement('div');  // create a new div element
        div3.setAttribute("id", `spiralCol`+merged[i]);  // add id to the new div 
        document.getElementById("spiralCol").appendChild(div3); // add the newly created element to the DOM
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
        } else if (randomNumber>1-(offset/4) && randomNumber<=2-(offset/4)) {
            stroke = `bottom`;
            bgColor = "darkgrey";                    
        } else if (randomNumber<=1){                      
            stroke = `right`;
            bgColor = "black";                    
        }
        //_____________________________________ possible cases

        offset += 0.00125;                       // raises the probalility of empty over time

        document.getElementById((`spiralCol`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`spiralCol`+(i+1))).style.backgroundColor =`${bgColor}`; //adds greyscale background color
        document.getElementById((`linearCol`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`linearCol`+(i+1))).style.backgroundColor =`${bgColor}`;  //adds greyscale background color
        document.getElementById((`linear`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`linear`+(i+1))).classList.add(`${stroke}`); // adds the generated vertical, horizontal or null stroke
        document.getElementById((`spiral`+(i+1))).className ="";  //resets class of to the div it parses
        document.getElementById((`spiral`+(i+1))).classList.add(`${stroke}`); // adds the generated vertical, horizontal or null stroke
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


createDivsLinear();
createDivsSpiral();
addClass();