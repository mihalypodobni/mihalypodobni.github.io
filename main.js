let width=50;
let arrayLength = width*width;
let mergedLinear = [];
mergedLinear = createLinearArray();
let mergedSpiral = [].concat.apply([], createSpiralArray()); // merges the arrays of createSpiralArray
let mergedupperLeft = [].concat.apply([], createUpperLeftArray()); // merges the arrays of createSpiralArray
let mergedSquare = [].concat.apply([], createSquareArray());



//Arrays, fill directions and fill modes
let allArray = [mergedLinear, mergedSpiral, mergedupperLeft, mergedSquare];
let rasterTypes = [`linear`, `spiral`,`upperLeft`,`square`];
let fillMode = [`Col`,`Stroke`];

//Create divs in DOM for each raster
function createAllDivs(){
    for (let types = 0; types < rasterTypes.length; types++) {
        for (let fill = 0; fill < fillMode.length; fill++) {
            for (let idCount = 0; idCount < arrayLength; idCount++) {
                div = document.createElement('div');
                div.setAttribute("id", rasterTypes[types]+fillMode[fill]+parseInt(allArray[types][idCount]));
                document.getElementById(rasterTypes[types]+fillMode[fill]).appendChild(div); 
            }            
        }
    }
}

//Fill the divs with random stroke / bg color
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
            stroke = `horizontal`;
            bgColor = "darkgrey";                    
        } else if (randomNumber<=1){                      
            stroke = `vertical`;
            bgColor = "black";                    
        }

        offset += 0.00125;                       // raises the probalility of empty over time

        for (let j = 0; j < rasterTypes.length; j++) {
            document.getElementById((rasterTypes[j]+`Stroke`+(i))).className ="";  //resets class of to the div it parses
            document.getElementById((rasterTypes[j]+`Stroke`+(i))).classList.add(`${stroke}`);
            document.getElementById((rasterTypes[j]+`Col`+(i))).className ="";  //resets class of to the div it parses
            document.getElementById((rasterTypes[j]+`Col`+(i))).style.backgroundColor =`${bgColor}`;                
        }
    }
}

//Create arrays with different fill directions
    function createLinearArray() {
        for (let i = 0; i < arrayLength; i++) {
            mergedLinear.push(i+1);
        }
        return mergedLinear;
    }

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

createAllDivs();
addClass();
