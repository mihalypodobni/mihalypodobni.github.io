// set dimensions
let onClick = false;
let width=50;
let arrayLength = width*width;

// merge 2D arrays into 1D single array
let mergedLinear = [];
mergedLinear = createLinearArray();
let mergedSpiral = [].concat.apply([], createSpiralArray()); // merges the arrays of createSpiralArray
let mergedupperLeft = [].concat.apply([], createUpperLeftArray()); // merges the arrays of createSpiralArray
let mergedSquare = [].concat.apply([], createSquareArray());

console.log(mergedupperLeft);

function onReady(callback) {
    var intervalId = window.setInterval(function() {
    if (document.getElementById('squareCol2451').className !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
    }
    }, 5550);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
});

//Arrays, fill directions and fill modes
let allArray = [mergedLinear, mergedSpiral, mergedupperLeft, mergedSquare];
let rasterTypes = [`linear`, `spiral`,`upperLeft`,`square`];
let fillMode = [`Stroke`,`Col`];

document.addEventListener('DOMContentLoaded', function(event) {
    //the event occurred
  })

//Create divs in DOM for each raster
function createAllDivs(){
    main = document.createElement('main');
    main.setAttribute("id", `board`);
    $(`body`).appendChild(main);
    for (let types = 0; types < rasterTypes.length; types++) {
        h1 = document.createElement('h1'); 
        var articleName = document.createTextNode(`${rasterTypes[types]} raster`);
        h1.appendChild(articleName);
        $(`main`).appendChild(h1);
        article = document.createElement('article');
        article.setAttribute("id",rasterTypes[types]);
        $(`main`).appendChild(article);
        for (let fill = 0; fill < fillMode.length; fill++) {
            section = document.createElement('section');
            section.setAttribute("id",rasterTypes[types]+fillMode[fill]);
            document.getElementById(rasterTypes[types]).appendChild(section);
            for (let idCount = 0; idCount < arrayLength; idCount++) {
                div = document.createElement('div');
                div.setAttribute("id", rasterTypes[types]+fillMode[fill]+parseInt(allArray[types][idCount]));
                document.getElementById(rasterTypes[types]+fillMode[fill]).appendChild(div); 
            }
        }            
    }
}

//Fill the divs with random stroke / bg color

//addClass v1
function addClass() {
    let stroke;
    let bgColor;
    let offset =-2;                        // to offsetts the probalility over time
    for (let i = 1; i <= arrayLength; i++) {       //cycles through all the divs
        let randomNumber = (Math.random() * 3);    //generates random number between 0-2.99
         //_____________________________________ possible cases
        if (randomNumber>=(2-offset)) {
            stroke = `empty`;
            bgColor = "white";                    
        } else if (randomNumber>1-(offset/8) && randomNumber<2-(offset/8)) {
            stroke = `vertical`;
            bgColor = "black";                                  
        } else if (randomNumber<=1){                      
            stroke = `horizontal`;
            bgColor = "darkgrey";
        }

        offset += 0.00125;                       // raises the probalility of empty over time

        for (let j = 0; j < rasterTypes.length; j++) {
            document.getElementById((rasterTypes[j]+`Stroke`+(i))).className ="";  //resets class of to the div it parses
            document.getElementById((rasterTypes[j]+`Stroke`+(i))).classList.add(`${stroke}`);
            document.getElementById ((rasterTypes[j]+`Col`+(i))).className ="";  //resets class of to the div it parses
            document.getElementById((rasterTypes[j]+`Col`+(i))).style.backgroundColor =`${bgColor}`;                
        }
    }
}

//addClass v2
/* function addClass(onClick) {
    let delay = 0;
    let stroke;
    let bgColor;
    let offset =-2;                        // to offsetts the probalility over time
    console.log(`onclick?`,onClick);

    for (let i = 1; i <= arrayLength; i++) {       //cycles through all the divs
        let randomNumber = (Math.random() * 3);    //generates random number between 0-2.99
         //_____________________________________ possible cases
        if (randomNumber>=(2-offset)) {
            stroke = `empty`;
            bgColor = "white";                    
        } else if (randomNumber>1-(offset/8) && randomNumber<2-(offset/8)) {
            stroke = `vertical`;
            bgColor = "black";                                  
        } else if (randomNumber<=1){                      
            stroke = `horizontal`;
            bgColor = "darkgrey";
        }

        offset += 0.00125; // raises the probalility of empty over time
        for (let j = 0; j < rasterTypes.length; j++) {
        if (onClick == undefined) {
                document.getElementById((rasterTypes[j]+`Stroke`+(i))).className ="";  //resets class of to the div it parses
                document.getElementById((rasterTypes[j]+`Stroke`+(i))).classList.add(`${stroke}`);
                document.getElementById ((rasterTypes[j]+`Col`+(i))).className ="";  //resets class of to the div it parses
                document.getElementById((rasterTypes[j]+`Col`+(i))).style.backgroundColor =`${bgColor}`;
            
        } else {
            delay = 100;
            setTimeout(function() {
                document.getElementById((rasterTypes[j]+`Stroke`+(i))).className ="";  //resets class of to the div it parses
                document.getElementById((rasterTypes[j]+`Stroke`+(i))).classList.add(`${stroke}`);
                document.getElementById ((rasterTypes[j]+`Col`+(i))).className ="";  //resets class of to the div it parses
                document.getElementById((rasterTypes[j]+`Col`+(i))).style.backgroundColor =`${bgColor}`;
            }, delay); 
            }
    }
}
} */

//addClass V3
/* console.log(`onclick?`,onClick);
function addClass(onClick) {
    let delay = 0;
    let stroke;
    let bgColor;
    let offset =-2;                        // to offsetts the probalility over time
    console.log(`onclick?`,onClick);

    for (let i = 1; i <= arrayLength; i++) {       //cycles through all the divs
        let randomNumber = (Math.random() * 3);    //generates random number between 0-2.99
         //_____________________________________ possible cases
        if (randomNumber>=(2-offset)) {
            stroke = `empty`;
            bgColor = "white";                    
        } else if (randomNumber>1-(offset/8) && randomNumber<2-(offset/8)) {
            stroke = `vertical`;
            bgColor = "black";                                  
        } else if (randomNumber<=1){                      
            stroke = `horizontal`;
            bgColor = "darkgrey";
        }

        offset += 0.00125; // raises the probalility of empty over time
        for (let j = 0; j < rasterTypes.length; j++) {
        if (onClick == undefined) {
            delay=0;
            classWrite(i,j,stroke,bgColor,delay); 
        } else if (onClick == true) {
            delay=100;
            classWrite(i,j,stroke,bgColor,delay); 
            }
    }
}
} */

//addClass V4
/* function addClass() {
    let stroke;
    let bgColor;
    let offset =-2;                        // to offsetts the probalility over time

    for (let i = 1; i <= arrayLength; i++) {       //cycles through all the divs
        let randomNumber = (Math.random() * 3);    //generates random number between 0-2.99
         //_____________________________________ possible cases
        if (randomNumber>=(2-offset)) {
            stroke = `empty`;
            bgColor = "white";                    
        } else if (randomNumber>1-(offset/8) && randomNumber<2-(offset/8)) {
            stroke = `vertical`;
            bgColor = "black";                                  
        } else if (randomNumber<=1){                      
            stroke = `horizontal`;
            bgColor = "darkgrey";
        }

        offset += 0.00125; // raises the probalility of empty over time
        for (let j = 0; j < rasterTypes.length; j++) {
            document.getElementById((rasterTypes[j]+`Stroke`+(i))).className ="";  //resets class of to the div it parses
            document.getElementById((rasterTypes[j]+`Stroke`+(i))).classList.add(`${stroke}`);
            document.getElementById ((rasterTypes[j]+`Col`+(i))).className ="";  //resets class of to the div it parses
            document.getElementById((rasterTypes[j]+`Col`+(i))).style.backgroundColor =`${bgColor}`;
        }
    }
}

function addClassDelay() {
    let delay = 0;
    let stroke;
    let bgColor;
    let offset =-2;                        // to offsetts the probalility over time
    for (let i = 1; i <= arrayLength; i++) {       //cycles through all the divs
        let randomNumber = (Math.random() * 3);    //generates random number between 0-2.99
         //_____________________________________ possible cases
        if (randomNumber>=(2-offset)) {
            stroke = `empty`;
            bgColor = "white";                    
        } else if (randomNumber>1-(offset/8) && randomNumber<2-(offset/8)) {
            stroke = `vertical`;
            bgColor = "black";                                  
        } else if (randomNumber<=1){                      
            stroke = `horizontal`;
            bgColor = "darkgrey";
        }

        offset += 0.00125; // raises the probalility of empty over time
        for (let j = 0; j < rasterTypes.length; j++) {
        classWrite(i,j,stroke,bgColor,delay); 

    }
}
}


function classWrite(i,j,stroke,bgColor,delay) {
    setTimeout(function() {
    document.getElementById((rasterTypes[j]+`Stroke`+(i))).className ="";  //resets class of to the div it parses
    document.getElementById((rasterTypes[j]+`Stroke`+(i))).classList.add(`${stroke}`);
    document.getElementById ((rasterTypes[j]+`Col`+(i))).className ="";  //resets class of to the div it parses
    document.getElementById((rasterTypes[j]+`Col`+(i))).style.backgroundColor =`${bgColor}`;
}, delay+j)
} */

//Create arrays with different fill directions
    //Linear
/*  __________[j0,j1,j2,j3,j4]
    Array[i0]|[01,02,03,04,05]
    Array[i1]|[06,07,08,09,10]
    Array[i2]|[11,12,13,14,15]
    Array[i3]|[16,17,18,19,20]
    Array[i4]|[21,22,23,24,25]
 */
    function createLinearArray() {
        for (let i = 0; i < arrayLength; i++) {
            mergedLinear.push(i+1);
        }
        return mergedLinear;
    }

    //Spiral
/*  __________[j0,j1,j2,j3,j4]

    Array[i0]|[01,02,03,04,05]
    Array[i1]|[16,17,18,19,06]
    Array[i2]|[15,24,25,20,07]
    Array[i3]|[14,23,22,21,08]
    Array[i4]|[13,12,11,10,09]
 */
    function createSpiralArray(width){
        width = 50;
        let spiralArray = [];
        
        for (let i = 0; i < width; i++) {
            spiralArray[i] = Array(width);
        }

        let topEdge = 0;
        let bottomEdge = (width-1);
        let leftEdge = 0;
        let rightEdge = (width-1);
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
    //Left up fill
    /*
    __________[j0,j1,j2,j3,j4]
    Array[i0]|[01,03,06,10,15]
    Array[i1]|[02,05,09,14,19]
    Array[i2]|[04,08,13,18,22]
    Array[i3]|[07,12,17,21,24]
    Array[i4]|[11,16,20,23,25]
    */
    function createUpperLeftArray() {
        var shiftCounter = [];
        var leftUpArray =[];
        let counter=1;
        let width = 50;
        //create emtpy array
        for (let y = 0; y < width; y++) {
            leftUpArray [y] = new Array(width);
        }
        //create counter utility array
        for (var s = 1; s <= width; s++) {
            shiftCounter.push(s);
        }
        for (var s = width; s >= 1; s--) {
            shiftCounter.push(s);
        }
        //set starting cell value
        leftUpArray[0][0]=1;
        //fill in first colunm values
        for (let y = 1; y < width; y++) {
            leftUpArray[y][0]= parseInt(leftUpArray[y-1][0])+counter;
            ++counter;
        }
        counter = 0;
        //fill in cell values
        for (let y = 0; y < width; y++) {
            for (let x = 1; x < width; x++) {
                leftUpArray[y][x]= parseInt(leftUpArray[y][x-1])+shiftCounter[x+y];
                };
            }

        return leftUpArray;
    }


    //Square fill
    /*
    __________[j0,j1,j2,j3,j4,j5]
    Array[i0]|[01,04,09,16,25,36]
    Array[i1]|[02,03,08,15,23,35]
    Array[i2]|[05,06,07,14,25,34]
    Array[i3]|[10,11,12,13,22,33]
    Array[i4]|[17,18,19,20,21,32]
    Array[i5]|[26,27,28,29,30,31]
    */
    function createSquareArray(width) {
        width = 50;
        var leftUpArray =[];
        let shiftCounter = [];
    
        //create counter utility
        for (var i = 1; i <= width; ++i) {
            shiftCounter.push((i*2)-1);
        }
    
        //create emtpy array
        for (let y = 0; y < width; y++) {
            leftUpArray [y] = new Array(width);
        }
    
        //set starting cell value
        leftUpArray[0][0]=1;
        //fill in first colunm values
        for (let y = 1; y < width; y++) {
            leftUpArray[y][0]= parseInt(leftUpArray[y-1][0])+parseInt(shiftCounter[y-1]);
        }
        counter = 2;
        //fill in cell values row by row
        for (let y = 0; y < width; y++) {
            for (let x = 1; x < width; x++) {
                leftUpArray[y][x]= parseInt(leftUpArray[y][x-1])+parseInt(shiftCounter[x]);
                };
            shiftCounter.splice(y+1,1,1)
            }
            
        return leftUpArray;
    }

function $ (query, log, arr, index) {
    let res = document.querySelectorAll(query);
    //console.log(res);

    let output = null;

    switch (res.length) {
        case 0:
            break;
        case 1:
            if (arr) {
                output = [];
                output.push(res[0]);
            } else {
                output = res[0];
            }
            break;
        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i]);
            }
            break;
    }

    if (index >= 0) {
        if (res.length <= 1) {
            throw ('Hey you have just 1 item or any. Please don\'t set any index for this quey');
            //console.warn('Hey you have just 1 item or any. Please don\'t set any index for this quey')
        }
        if (log != null) {
            console.log(log +': ', output[index]);
        }
        
        return output[index];
    } else {
        if (log != null) {
            console.log(log +': ', output);
        }
        return output;
    }
    

}

/* spinDivCreator();
 */createAllDivs();
addClass();


function spinDivCreator() {
    loaderDiv = document.createElement('div');
    loaderDiv.setAttribute("id",`loading`);
    loaderDiv.setAttribute("class",`loaderbox`);
    document.getElementById(`body`).appendChild(loaderDiv);

    spinnerContainerDiv = document.createElement('div');
    spinnerContainerDiv.setAttribute("id",`concentric-spinner`);
    document.getElementById("loading").appendChild(spinnerContainerDiv);
    for (let i = 1; i = 15; i++) {            
        spinnerDiv = document.createElement('div');
        spinnerDiv.setAttribute("class",`spinner-square`);
        document.getElementById("concentric-spinner").appendChild(spinnerDiv);
/*         style.innerHTML = `.cssClass {height: calc(40px / 6 + ${(i-1)} * 40px / 6); width: calc(40px / 6 + ${(i-1)} * 40px / 6); animation-delay: calc(30ms * ${(i)});}`;
 */    }
}
